import supertest from "supertest";
import mongoose from "mongoose";

import app  from "../app";

const request = supertest(app);

  function close() {
    
    afterAll((done) => {
      // Closing the DB connection allows Jest to exit successfully.
      done();
      return mongoose.connection.close();
      });
  }
close();
