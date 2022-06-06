const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

const { graphqlHTTP } = require("express-graphql");
const schema = require("./Schemas");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
