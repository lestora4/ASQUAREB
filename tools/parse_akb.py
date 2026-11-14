import re,json
t=open('/tmp/akb.txt',encoding='utf8').read().replace('\f','\n')
# strip page-header noise
lines=t.split('\n')
# find chapter/section context
ctx={'chapter':'','section':''}
entries=[]
cur=None
def flush():
    global cur
    if cur and cur.get('q') and cur.get('a'):
        entries.append(cur)
    cur=None
mode=None
for ln in lines:
    s=ln.strip()
    m=re.match(r'^CHAPTER\s+(\d+)\s*[–-]\s*(.*)',s)
    if m: flush(); ctx['chapter']=m.group(2); continue
    m=re.match(r'^SECTION\s+([\d.]+)\s*[–-]\s*(.*)',s)
    if m: flush(); ctx['section']=m.group(2); mode=None; continue
    m=re.match(r'^FAQ\s+([A-Z]+-\d+)',s)
    if m:
        flush(); cur={'id':m.group(1),'chapter':ctx['chapter'],'section':ctx['section'],'q':'','alt':[],'a':[],'lead':[]}; mode=None; continue
    if cur is None: continue
    if s=='Question': mode='q'; continue
    if s in('Alternate Questions','Alternative Questions','Alternate Question'): mode='alt'; continue
    if s=='Answer': mode='a'; continue
    if s=='Lead Prompt': mode='lead'; continue
    if not s: 
        if mode in('a','lead'): (cur[mode] if mode!='q' else None).append('')
        continue
    if mode=='q': cur['q']=(cur['q']+' '+s).strip()
    elif mode=='alt': cur['alt'].append(re.sub(r'^[•\-\u2022]\s*','',s))
    elif mode=='a': cur['a'].append(('• '+re.sub(r'^[•\u2022]\s*','',s)) if s.startswith('•') else s)
    elif mode=='lead': cur['lead'].append(s)
flush()
def tidy(parts):
    out=[];prev_blank=False
    for p in parts:
        if p=='' :
            if not prev_blank and out: out.append('')
            prev_blank=True
        else: out.append(p); prev_blank=False
    # join wrapped lines: lines not starting with bullet/number continue previous line if previous doesn't end with punctuation
    res=[]
    for p in out:
        if p=='': res.append(p); continue
        if res and res[-1]!='' and not p.startswith('•') and not re.match(r'^\d+[.)]\s',p) and not res[-1].endswith(('.',':','?','!')) and not res[-1].startswith('•') is False:
            pass
        res.append(p)
    # simple wrap-join
    final=[]
    for p in res:
        if p=='': final.append(''); continue
        if final and final[-1] and not p.startswith('•') and not re.match(r'^\d+[.)]\s',p) and not final[-1].endswith((':','?')) and (final[-1][-1] not in '.!') :
            final[-1]+=' '+p
        else: final.append(p)
    txt='\n'.join(final)
    txt=re.sub(r'(\w)- (\w)',r'\1-\2',txt)
    return re.sub(r'\n{3,}','\n\n',txt).strip()
out=[]
for e in entries:
    a=tidy(e['a']); lead=tidy(e['lead']) if e['lead'] else ''
    out.append({'id':e['id'],'sec':e['section'],'ch':e['chapter'],'q':e['q'],'alt':e['alt'],'a':a,'lead':lead})
json.dump(out,open('/tmp/akb.json','w'),ensure_ascii=False,indent=0)
print(len(out)); 
import collections
print(collections.Counter(x['ch'][:30] for x in out).most_common(40))
for x in out[:3]+out[60:62]: print(json.dumps(x,ensure_ascii=False)[:900]); print()
