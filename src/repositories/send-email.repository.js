const sgMail = require('@sendgrid/mail')

exports.sendEmail = async (email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { to, from, subject, text } = email
    const msg = {
        to: to,
        from: from,
        subject: subject,
        text: text
    }
    const response = sgMail
        .send(msg)
        .then((response) => {
            return response;
        })
        .catch(err => console.error(err));
    return response;
};

