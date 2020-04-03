import express from 'express';
import Usuario from '../models/usuario';
const app = express();
const UsuariosRoutes = express.Router();

// ------------------------------------------------------------------------------------------------------------------
UsuariosRoutes.route('/').get((req, res) => {
    Usuario.find((err, usuarios) => {
        if(err)
            console.log(err);
        else
            res.json(usuarios);
        console.log("get usuarios");
    });
});

UsuariosRoutes.route('/:id').get((req, res) => {
    Usuario.findById(req.params.id, (err, usuario) => {
        if(err)
            console.log(err);
        else
            res.json(usuario);
    });
});

UsuariosRoutes.route('/cadastrar').post((req, res) => {
    // Converte a requisição em usuario
    let usuario = new Usuario(req.body);
    usuario.save()
        .then(usuario => {
            res.status(200).json({'usuario': 'Cadastrado com sucesso'});
        })
        .catch(err => {
            res.status(400).send('Erro no cadastro de usuario');
            console.log(err);
        });
    console.log("Tentou cadastrar usuario");
});

UsuariosRoutes.route('/editar/:id').post((req, res) => {
    Usuario.findById(req.params.id, (err, usuario) => {
        if(!usuario) {
                console.log("Usuário não encontrado");
                return next(new Error('Usuario não encontrado'));
        }
        else {
            console.log("Encontrou Usuario");
            // Atualiza os dados
            usuario.username = req.body.username;
            usuario.email = req.body.email;
            usuario.telefone = req.body.telefone;
            usuario.senha = req.body.senha;
            // salva
            usuario.save().then(usuario => {
                console.log("Edição concluida");
                res.json('Edição concluída');
            }).catch(err =>{
                console.log("Ocorreu um erro na edicao");
                res.status(400).send('Ocorreu um erro na edição');
            });
        }
    });
});

UsuariosRoutes.route('/excluir/:id').get((req, res) => {
    Usuario.findByIdAndRemove({_id: req.params.id}, (err, usuario) => {
        if(err)
            res.json(err);
        else
            res.json('Usuario foi apagado');
    });
});

export default UsuariosRoutes;