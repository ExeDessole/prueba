import transporter from "../config/mailer.js";
import { generateTokenRecovery } from "../utils.js";

const BASE_URL = process.env.BASE_URL || "http://localhost:8080";

const mailService = {
  async sendPasswordRecoveryEmail(user) {
    const token = generateTokenRecovery(user);
    const resetLink = `${BASE_URL}/recovery/reset/${token}`;

    const mailOptions = {
      from: '"Soporte" <no-reply@example.com>',
      to: user.email,
      subject: "Recuperación de contraseña",
      html: `
        <h2>Hola ${user.first_name},</h2>
        <p>Recibimos una solicitud para restablecer tu contraseña.</p>
        <p><a href="${resetLink}">Haz clic aquí para restablecerla</a></p>
        <p>Este enlace expirará en 15 minutos.</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("📧 Correo enviado:", info.messageId);
      return info;
    } catch (err) {
      console.error("❌ Error al enviar el correo:", err);
      throw new Error("No se pudo enviar el correo");
    }
  }
};

export default mailService;