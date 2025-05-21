import nodemailer from 'nodemailer';

const transporter = ($) => {
  return nodemailer.createTransport({
    host: $.auth.data.host,
    port: $.auth.data.port,
    secure: $.auth.data.useTls,
    auth: {
      user: $.auth.data.username,
      pass: $.auth.data.password,
    },
    tls: {
      rejectUnauthorized: $.auth.data.tlsRejectUnauthorized,
    },
  });
};

export default transporter;
