// import { MongoMemoryServer } from "mongodb-memory-server";
// import mongoose from "mongoose";

// const mongod = new MongoMemoryServer();
// // dotenv.config();
// const connect = async () => {
//   const uri = "";
//   // const uri = "mongodb://localhost/myTests";
//   // const uri =process.env.DATABASE_URI;

//   const mongooseOpts = {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//   };

//   await mongoose.connect(uri, mongooseOpts);
// };

// const closeDatabase = () => {
//   try {
    
//     mongoose.connection.dropDatabase();
//     mongoose.connection.close();
//     mongod.stop();
//   } catch (error) {
    
//   }
// };

// const clearDatabase = async () => {
//   const collections = mongoose.connection.collections;

//   for (const key in collections) {
//     const collection = collections[key];
//     await collection.deleteMany({}, () => {});
//   }
// };

// beforeAll( async() => await connect());

// /**
//  * Clear all test data after every test.
//  */afterEach( () => clearDatabase());
      
//       /**
//        * Remove and close the db and server.
//        */
//       afterAll(() => closeDatabase());

