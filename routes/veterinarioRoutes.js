import express from "express";
import {    registrar, 
            perfil, 
            confirmar, 
            autenticar, 
            olvidePassword, 
            comprobarToken, 
            nuevoPassword,
            actualizarPerfil,
            actualizarPassword
    
        } from "../controllers/veterinarioController.js";
import checkAuth from "../middleware/authMiddlewate.js";
const router = express.Router()

// acceso publico
router.post("/", registrar)
router.get("/confirmar/:token", confirmar)
router.post("/login", autenticar)
router.post("/olvide-password", olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)

//acceso privado
router.get("/perfil", checkAuth, perfil)
router.put("/perfil/:id", checkAuth, actualizarPerfil)
router.put("/actualizar-password", checkAuth, actualizarPassword)

export default router