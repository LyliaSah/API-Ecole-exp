import "dotenv/config";
import express from "express";
import { Sequelize, DataTypes } from "sequelize";
import cors from "cors";

import { userRouter } from "./router/user";
import { eleveRouter } from "./router/eleves";
import { groupeRouter } from "./router/groupes";
import { classeRouter } from "./router/classes";
import { authRouter } from "./router/auths"

import bodyParser from "body-parser";


const app = express();

app.use(cors());
app.use(express.json());

const apiRouter = express.Router();
apiRouter.use("/user", userRouter);
apiRouter.use('/eleves', eleveRouter);
apiRouter.use('/groupes', groupeRouter);
apiRouter.use('/auths', groupeRouter);
apiRouter.use('/classes', groupeRouter)

app.use("/api", apiRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`)
});

