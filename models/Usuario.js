import pkg from 'mongoose';
const { Schema, model } = pkg;
const UsuarioSchema = new Schema({
	nombre: {
		type: String,
		required: true,
	},
	dni: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: false,
		// unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	rol:{
		type: String,
		required: true,
	},
	//´PARA USUARIO APODERADO 
	telefono:{
		type: String,
		required: false,
	},
	foto_perfil:{
		type: String,
		required: false
	}, 
	// dni_paciente:{
	// 	type: String,
	// 	required: false
	// },
	// id_Historia:{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Historia',
	// 	required: false
	// }
	
});


// UsuarioSchema.method.setFotoPerfil = function setFotoPerfil(filename){
// 	this.foto_perfil = `/api/auth/uploads/${filename}`
// }

export default model('Usuario', UsuarioSchema);