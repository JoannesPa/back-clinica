import {config} from 'dotenv'

config()
//const MONGODB_URI = "mongodb://localhost:27017/clinica"
const PORT = process.env.PORT || 5000
  const MONGODB_URI = process.env.MONGODB_URI
export {
	MONGODB_URI,
	PORT
}