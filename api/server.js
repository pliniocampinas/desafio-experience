import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Rotas
import UsuariosRoutes from './routes/usuarios.route';
import ClientesRoutes from './routes/clientes.route';

const app = express();
const router = express.Router();

// substituir por import, ou nao?
const usuariosRoutes = UsuariosRoutes;
const clientesRoutes = ClientesRoutes;

app.use(cors());
app.use(bodyParser.json());

// endereço do server/<nome_da_base>
mongoose.connect('mongodb://localhost:27017/app-experience');

const connection = mongoose.connection;

// Rotas configuradas em arquivos próprios
app.use('/usuarios', usuariosRoutes);
app.use('/clientes', clientesRoutes);

// configura event listerner
connection.once('open', () => {
    console.log('Mongo conectado!');

});
// ------------------------------------------------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////////////
app.use('/', router);

app.get('/', (req, res) => res.send('Funcionando'));

app.listen(4000, () => console.log('Servidor express rodando no Port 4000'));
