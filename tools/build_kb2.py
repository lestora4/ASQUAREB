import re,glob,json,os
from bs4 import BeautifulSoup, NavigableString, Tag
PUB='/home/claude/w2/as-main/public'
os.chdir(PUB)
SKIP={'login.html','dashboard.html','chatbot-standalone.html','enquiry.html','global-education-register.html','careers.html','gallery.html'}
LEGAL={'privacy.html','terms.html','refund-cancellation-policy.html','cookie-policy.html','admissions-consultancy-disclaimer.html','child-protection-parental-consent.html','marketing-communication-consent.html'}
NOISE=re.compile(r'^(subscribe|follow asquareb|send a message|fill in the form|stay connected|pick your nearest branch|©|copyright|all rights reserved)|newsletter|^["“].*["”]$',re.I)
BLOCK={'p','div','li','ul','ol','h1','h2','h3','h4','h5','tr','br','section','dt','dd','blockquote'}
def clean_line(t): return re.sub(r'[ \t\r\f\v\xa0]+',' ',t).strip()
def txt(el):
    out=[]
    def rec(n):
        if isinstance(n,NavigableString):
            out.append(str(n).replace('\n',' ')); return
        if not isinstance(n,Tag): return
        if n.name=='li': out.append('\n• ')
        elif n.name in BLOCK: out.append('\n')
        for c in n.children: rec(c)
        if n.name in BLOCK and n.name!='li': out.append('\n')
    rec(el)
    lines=[clean_line(l) for l in ''.join(out).split('\n')]
    lines=[l for l in lines if l and l!='•']
    return '\n'.join(lines)
def one(t): return re.sub(r'\s+',' ',t).strip()
def load(f):
    soup=BeautifulSoup(open(f,encoding='utf8').read(),'lxml')
    faq=[]
    for it in soup.select('.faq-item'):
        q=it.select_one('.faq-question-block'); a=it.select_one('.faq-answer-wrapper')
        if q and a: faq.append((one(q.get_text(' ')),txt(a)))
    for t in soup(['script','style','noscript','svg','nav','header','footer','form','template','iframe','button','select','input','textarea']): t.decompose()
    for sel in ['#chatbotWidget','[class*="asb-footer"]','[class*="navbar"]','[class*="popup"]','[class*="cookie"]','[class*="collab"]','[class*="whatsapp"]','.w-nav','[class*="menu"]','[class*="breadcrumb"]','[class*="newsletter"]','[class*="testimonials"]']:
        for t in soup.select(sel): t.decompose()
    title=one(soup.title.get_text()) if soup.title else f
    title=re.split(r'\s[|–-]\s',title)[0].strip()
    return soup,title,faq
chunks=[];articles=[]
def add(page,title,heading,text,kind):
    text=text.strip()
    if len(text)<40 or NOISE.search(one(text)[:80]) : return
    chunks.append({'p':page,'t':title,'h':heading,'x':text,'k':kind[0]})
for f in sorted(glob.glob('*.html')):
    if f in SKIP: continue
    soup,title,faq=load(f)
    kind='legal' if f in LEGAL else ('blog' if f.startswith('blog') else 'page')
    if f=='faq.html':
        for q,a in faq: add(f,'FAQ',q,a,'faq')
        continue
    body=soup.body or soup
    cur=title; buf=[]; seen=set()
    def flush():
        global buf
        txtall='\n'.join(buf); buf=[]
        parts=[];cur_part=''
        for line in txtall.split('\n'):
            if len(cur_part)+len(line)>650 and cur_part:
                parts.append(cur_part); cur_part=''
            cur_part+=('\n' if cur_part else '')+line
        if cur_part: parts.append(cur_part)
        for p in parts: add(f,title,cur,p,kind)
    for el in body.find_all(['h1','h2','h3','h4','p','li','td','dd']):
        if el.name in('li','td') and el.find(['p','li','h1','h2','h3','h4']): continue
        t=one(el.get_text(' '))
        if not t or t in seen: continue
        seen.add(t)
        if el.name in('h1','h2','h3','h4'):
            flush(); cur=t
        else:
            buf.append(('• '+t) if el.name=='li' else t)
    flush()
    if kind=='blog':
        h1=soup.find('h1'); first=next((c for c in chunks if c['p']==f),None)
        articles.append({'u':f,'t':one(h1.get_text(' ')) if h1 else title,'d':(first['x'].split('\n')[0][:140] if first else '')})
out=[];sig=set()
for c in chunks:
    k=one(c['x'])[:100].lower()
    if k in sig: continue
    sig.add(k); out.append(c)
programs=[
 {'t':'Career Intelligence & Assessment','u':'career-intelligence-assessment.html','d':'DMIT, SAT & personalised career assessment'},
 {'t':'Global Education & Admissions','u':'global-education-admissions.html','d':'Overseas education guidance, admissions & consultancy'},
 {'t':'Academic Excellence Program','u':'academic-excellence.html','d':'Class 1–12, PUC, ICSE, CBSE, KSEAB & other boards'},
 {'t':'Education Admissions & Guidance','u':'education-admissions-guidance.html','d':'School, college & professional course admissions in State and National reputed colleges and Universities'},
 {'t':'Online Education & Skill Development','u':'online-education-skill-development.html','d':'Flexible education and career-focused skill programs (BVOC and Degree Courses)'},
 {'t':'Competitive Exam Preparation','u':'competitive-exam-preparation.html','d':'Entrance, government & competitive examination coaching'},
 {'t':'Professional & Soft Skills Development','u':'professional-soft-skills-development.html','d':'Workplace readiness, communication & industry skills'},
 {'t':'Special Learning & Development Programs','u':'special-learning-development-programs.html','d':'STEP, Summer Camp & other specialised programs'},
]
partners=[
 {'t':'AsquareB Campus Connect','u':'campus-connect.html'},
 {'t':'AsquareB Orbit Alliance','u':'orbit-alliance.html'},
 {'t':'AsquareB Orbit Innovate','u':'orbit-innovate.html'},
]
# --- supplementary doc knowledge (AKB 2026). Website text always wins over the doc. ---
akb=json.load(open('/home/claude/tools/akb.json',encoding='utf8'))
for e in akb:
    a=e['a'].strip()
    if len(a)<30: continue
    out.append({'p':'','t':'AsquareB Knowledge Base','h':e['q'],'alt':[x for x in e['alt'] if x],'x':a[:1800],'k':'d','s':e['sec']})
kb={'chunks':out,'programs':programs,'partners':partners,'articles':articles}
js='/* ASQIVO knowledge base - generated from the AsquareB website pages. Do not edit by hand; re-run the builder after changing site content. */\nwindow.ASQIVO_KB='+json.dumps(kb,ensure_ascii=False,separators=(',',':'))+';\n'
open('asqivo-kb.js','w',encoding='utf8').write(js)
print(len(out),'chunks',len(js)//1024,'KB',len(articles),'articles')
from collections import Counter
print(Counter(c['k'] for c in out))
