import express from 'express';
import Cliente from '../models/cliente';
const app = express();
const ClientesRoutes = express.Router();

// ------------------------------------------------------------------------------------------------------------------
ClientesRoutes.route('/').get((req, res) => {
    Cliente.find((err, clientes) => {
        if(err)
            console.log(err);
        else
            res.json(clientes);
        console.log("get clientes");
    });
});

ClientesRoutes.route('/:id').get((req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
        if(err)
            console.log(err);
        else
            res.json(cliente);
    });
});

ClientesRoutes.route('/cadastrar').post((req, res) => {
    // Converte a requisição em cliente
    let cliente = new Cliente(req.body);
    cliente.save()
        .then(cliente => {
            res.status(200).json({'cliente': 'Cadastrado com sucesso'});
        })
        .catch(err => {
            res.status(400).send('Erro no cadastro de cliente');
            console.log(err);
        });
    console.log("Tentou cadastrar cliente");
});

ClientesRoutes.route('/editar/:id').post((req, res) => {
    Cliente.findById(req.params.id, (err, cliente) => {
        if(!cliente) {
                console.log("Cliente não encontrado");
                return next(new Error('Cliente não encontrado'));
        }
        else {
            console.log("Encontrou cliente");
            // Atualiza os dados
            cliente.nomeCompleto = req.body.nomeCompleto;
            cliente.cpf = req.body.cpf;
            cliente.endereco = req.body.endereco;
            cliente.telefone = req.body.telefone;
            // salva
            cliente.save().then(cliente => {
                console.log("Edição concluida");
                res.json('Edição concluída');
            }).catch(err =>{
                console.log("Ocorreu um erro na edicao");
                res.status(400).send('Ocorreu um erro na edição');
            });
        }
    });
});

ClientesRoutes.route('/excluir/:id').get((req, res) => {
    Cliente.findByIdAndRemove({_id: req.params.id}, (err, cliente) => {
        if(err)
            res.json(err);
        else
            res.json('cliente foi apagado');
    });
});

export default ClientesRoutes;