require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(
  "/graphql",
  graphqlHTTP({ schema, graphiql: process.env.NODE_ENV === "development" })
);

const start = async () => {
  const connectionSuccess = await connectDB();
  if (connectionSuccess) {
    app.listen(port, async () => {
      console.log(`Listening on port ${port}`);
    });
  }
};

start();
