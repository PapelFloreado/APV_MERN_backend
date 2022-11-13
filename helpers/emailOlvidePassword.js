import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const emailResetPassword = async(datos)=>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });
    console.log(datos)

    const {email,nombre,token} = datos

    const info = await transporter.sendMail({
        from: "APV - Administrador de Pacientes de Veterinaria",
        to: email,
        subject: "Has solicitado reestablecer tu password",
        text:"Hola, sigue las instrucciones para reestrablecer tu password",
        html:`<p>Hola ${nombre} clickea en el siguiente enlace para reestablecer tu password:<a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a></p>
        <p>Si tu no creaste una cuenta, desestima este mensaje</p>
        `
    })

}

export default emailResetPassword