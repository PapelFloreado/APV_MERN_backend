import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const emailRegistro = async(datos)=>{
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
        subject: "Valida tu cuenta en APV",
        text:"Hola, valida tu cuenta para poder acceder al sistema",
        html:`<p>Tu ${nombre} cuenta ya esta lista para ser utilizada, solo debes validarla con el siguiente enlace:<a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
        <p>Si tu no creaste una cuenta, desestima este mensaje</p>
        `
    })

}

export default emailRegistro