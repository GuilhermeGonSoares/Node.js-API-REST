import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router()
//Rotas são das mais específicas para as menos específicas
router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivroPorEditora)
    .get('/livros/:livroId', LivroController.listarLivroPorId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:livroId', LivroController.atualizarLivro)
    .delete('/livros/:livroId', LivroController.excluirLivro)

export default router