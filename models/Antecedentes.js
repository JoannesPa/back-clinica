import pkg from 'mongoose';
const { Schema, model } = pkg;
const AntecedentesSchema = new Schema({
	//FAMILIARES
	asmaBronquialFam: {
		type: Boolean,
		required: false,
	},
	diabetes: {
		type: Boolean,
		required: false,
	},
	epilepsia: {
		type: Boolean,
		required: false,
	},
	Otros: {
		type: String,
		required: false,
	},

	//NATALES
	peso_al_nacer: {
		type: Number,
		required: false,
	},
	talla_al_nacer: {
		type: Number,
		required: false,
	},
	pc: {
		type: Number,
		required: false,
	},
	tipoDeParto: {
		type: Number,
		required: false,
	},
	apgar1: {
		type: Number,
		required: false,
	},
	apgar5: {
		type: Number,
		required: false,
	},
	edadGestacional: {
		type: Number,
		required: false,
	},
	complicaciones: {
		type: String,
		required: false,
	},

	//PATOLÓGICOS
	alergia: {
		type : String,
		required : false,
	},
	asmaBronquialPat: {
		type: Boolean,
		required: false,
	},
	nebulizacion: {
		type: Boolean,
		required: false,
	},
	intervencionQuirurgica: {
		type: Boolean,
		required: false,
	},
	reaccionAdversaMed: {
		type: Boolean,
		required: false,
	},
	sob: {
		type: Boolean,
		required: false,
	},
	enfAnteriores: {
		type: String,
		required: false,
	},

	id_Historia: {
		type: Schema.Types.ObjectId,
		ref: 'Historia',
		required: true,
	},
});

export default model('Antecedentes', AntecedentesSchema);
