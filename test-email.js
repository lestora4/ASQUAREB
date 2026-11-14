const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'care@asquareb.in',
        pass: 'xezm ulwc kbul yyun'
    }
});

transporter.sendMail({
    from: 'care@asquareb.in',
    to: 'care@asquareb.in',
    subject: 'Test Email',
    text: 'Test email from ASQUAREB'
})
.then(info => {
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
})
.catch(err => {
    console.error('❌ Error:', err.message);
});