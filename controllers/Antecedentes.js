import Antecedentes from '../models/Antecedentes.js';
import Historia from '../models/Historia.js';

const CrearAntecedentes = async (req, res) => {
	const {
		asmaBronquialFam,
		diabetes,
		epilepsia,
		otros,
		peso_al_macer,
		tipoDeParto,
		/*lugarDeParto,*/ apgar1,
		apgar5,
		edadGestacional,
		complicaciones,
		alergia,
		asmaBronquialPat,
		nebulizacion,
		intervencionQuirurgica,
		reaccionAdversaMed,
		enfAnteriores,
		id_Historia,
	} = req.body;
	try {
		const idHistoria = await Historia.findOne({ _id: id_Historia });
		if (!idHistoria) {
			return res.status(404).json({
				ok: false,
				msg: 'Paciente no existe con ese id',
			});
		}

		const antecedentes = new Antecedentes(req.body);

		await antecedentes.save();

		res.status(201).json({
			ok: true,
			antecedentes: antecedentes,
		});
	} catch (error) {
		console.log('Error: ' + error.toString());
		res.status(500).json({
			ok: false,
			msg: 'Por favor hable con el administrador',
		});
	}
};

const ActualizarAntecedentes = async (req, res = response) => {
	const antecedentesId = req.params.id;
	const { id_Historia } = req.body;
	const idHistoria = id_Historia;
	try {
		const antecedentes = await Antecedentes.findById(antecedentesId);
		if (!antecedentes) {
			return res.status(404).json({
				ok: false,
				msg: 'Antecedentes no existen con ese id',
			});
		}
		if (antecedentes.id_Historia.toString() != idHistoria) {
			return res.status(401).json({
				ok: false,
				msg: 'No tiene privilegio de editar esta Historia',
			});
		}
		const nuevoAntecedentes = {
			...req.body,
			id_Historia: idHistoria,
		};
		const antecedentes_Actualizados =
			await Antecedentes.findByIdAndUpdate(
				antecedentesId,
				nuevoAntecedentes,
				{
					new: true,
				}
			);
		res.json({
			ok: true,
			antecedentes: antecedentes_Actualizados,
		});
	} catch (e) {
		console.log(e);
		res.status(500).json({
			ok: false,
			msg: 'Hable con el administrador',
		});
	}
};

const MostrarAntecedentes = async (req, res) => {
	const antecedentes = await Antecedentes.find();
	return res.json(antecedentes);
};
const AntecedentesId = async (req,res) =>{
	 const antecedentes = await Antecedentes.find({id_Historia: req.params.id});
	 return res.json(antecedentes);
}
export {
	CrearAntecedentes,
	ActualizarAntecedentes,
	MostrarAntecedentes,
	AntecedentesId
};
