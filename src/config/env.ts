import dotenv from 'dotenv';
dotenv.config();
export const connectionURI : string = process.env.MONGO_URI; 