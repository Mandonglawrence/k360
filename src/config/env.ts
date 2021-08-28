import dotenv from 'dotenv';
dotenv.config();
const connectionURI : any = process.env.MONGO_URI; 
export default connectionURI; 