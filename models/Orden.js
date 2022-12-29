import pkg from 'mongoose';
const { Schema, model } = pkg;

const OrdenSchema = new Schema({
    fecha: {
        type: Date,
        required: false
    },
    id_HistClinica:{
        type: Schema.Types.ObjectId,
        ref:'HistClinica',
        required:false,
    }
})

export default model('Orden', OrdenSchema)