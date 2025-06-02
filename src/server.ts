import express from "express";
import { Express } from "express";
import { serverConfig } from "./config";
import routers from "./routers/index";
const app: Express = express();

const PORT: Number = 3000;

app.use(routers);

app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
});
