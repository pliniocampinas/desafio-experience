import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Cliente = new Schema({
    nomeCompleto: {
        type: String
    },

    cpf: {
        type: String
    },

    endereco: {
        type: String
    },

    telefone: {
        type: String
    },

});

export default mongoose.model('clientes', Cliente);