import express from "express";
import router from "./routes/index.js";

const app = express();
const port = 3000;

app.use(router);

app.get('/', (req, res) => {
    res.send('Bienvenido');
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });