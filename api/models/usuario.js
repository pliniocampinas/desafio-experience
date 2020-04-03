import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Usuario = new Schema({
    username: {
        type: String
    },

    email: {
        type: String
    },

    telefone: {
        type: String
    },

    senha: {
        type: String
    },

});

export default mongoose.model('usuarios', Usuario);