const { Resend } = require("resend");

exports.sendEmail = async (email) => {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const response = await resend.emails.send(email);
        return response;
    } catch (error) {
        console.log(error);
    }
};

