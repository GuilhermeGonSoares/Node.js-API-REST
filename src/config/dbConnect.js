import mongoose from "mongoose"

mongoose.connect("mongodb://alura:123@alura-shard-00-00.ioprh.mongodb.net:27017,alura-shard-00-01.ioprh.mongodb.net:27017,alura-shard-00-02.ioprh.mongodb.net:27017/alura-node?ssl=true&replicaSet=atlas-6s0lvs-shard-0&authSource=admin&retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;