import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const DBConnection=async()=>{

    const  MONGO_URL=`mongodb://${USERNAME}:${PASSWORD}@ac-hwwgvsa-shard-00-00.xuagiv5.mongodb.net:27017,ac-hwwgvsa-shard-00-01.xuagiv5.mongodb.net:27017,ac-hwwgvsa-shard-00-02.xuagiv5.mongodb.net:27017/?ssl=true&replicaSet=atlas-vqi651-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGO_URL,{useNewUrlParser:true});
        console.log('Database connected successfully');

    }
    catch(error){
        console.error('Error while connecting with the database',error.message);
    }
}


export default DBConnection;