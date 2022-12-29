import mongoose from 'mongoose';
import { MONGODB_URI } from "./config.js"

const dbConnection = async () => {
    try {
        const db = await mongoose.connect("mongodb://danielsin:peru2019@cluster-shard-00-00.cvrfp.mongodb.net:27017,cluster-shard-00-01.cvrfp.mongodb.net:27017,cluster-shard-00-02.cvrfp.mongodb.net:27017/clinica?ssl=true&replicaSet=atlas-tm2jhe-shard-0&authSource=admin&retryWrites=true&w=majority")
        console.log("DB connected to", db.connection.name)
    } catch (error) {
        console.log(error)
    }
}

export {
    dbConnection
}