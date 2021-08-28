import mongoose from "mongoose";
import connectionURI  from './env';
 const myConnection = async function connectToCluster(){
    await mongoose.connect(`${connectionURI}`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    (err) => {
      if (!err) {
        console.log("mongodb connected successfully")
      }
      else{
        console.log(`err`, err)
        console.log("mongodb connection failed")
      }
    }
    )
     
  } 
  export default myConnection;
