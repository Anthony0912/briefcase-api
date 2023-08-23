const sgMail = require('@sendgrid/mail')

exports.sendEmail = async (email) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const { to, from, subject, text } = email
    const msg = {
        to: to,
        from: from,
        subject: subject,
        text: text,
        mail_settings: {
            sandboxMode: {
                enable: true
            }
        }
    }
    const response = await sgMail
        .send(msg)
        .then((response) => {
            return response;
        })
        .catch(err => { return err });
    return response;
};

