import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_password'
    }
});

const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'temp@gmail.com',
    subject: 'Interested Quote',
    text: 'You have a new quote request from your website.'
};

app.post('/submit-form', (req, res) => {
    const { fullName, email, phoneNumber } = req.body;
    mailOptions.text = `Name: ${fullName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`;

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ success: false, message: 'Failed to send email' });
        } else {
            console.log('Email sent:', info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});