import express from "express";
import { Express } from "express";
import { serverConfig } from "./config";
import v1Routes from "./routers/v1";
import { z } from "zod";
import { genericErrorHandler } from "./middlewares/error.middleware";
const app: Express = express();

const PORT: Number = 3000;

app.use(express.json());

app.use("/api/v1", v1Routes);
app.use(genericErrorHandler)


app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
  const obj = {
    name: "nishant",
    age: 22,
  };

  const objSchema = z.object({
    name: z.string(),
    age: z.number(),
  });

  const result = objSchema.safeParse(obj);
  console.log(result);
});
