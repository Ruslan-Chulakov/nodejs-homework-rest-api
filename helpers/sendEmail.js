const nodemailer = require("nodemailer");
const { META_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "AN_124_100@meta.ua",
    pass: META_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: "AN_124_100@meta.ua" };
    await transporter.sendMail(email);
    return true;
  } catch (error) {
    throw error;
  }
};
module.exports = sendEmail;
