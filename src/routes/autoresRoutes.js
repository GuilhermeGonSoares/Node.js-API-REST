import express from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router()

router
    .get('/autores', AutorController.listarAutores)
    .get('/autores/:autorId', AutorController.listarAutorPorId)
    .post('/autores', AutorController.cadastrarAutor)
    .put('/autores/:autorId', AutorController.atualizarAutor)
    .delete('/autores/:autorId', AutorController.excluirAutor)

export default router