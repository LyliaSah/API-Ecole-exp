import { Router } from "express";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient()

export const classeRouter = Router();

classeRouter.post('/', async (req, res) => {
  const newClasse = await Classe.create({
    name: req.body.data.name,
    id: req.body.data.id
  });
  res.status(201).json(newClasse);
});

classeRouter.get("/:id", async (req, res) => {
  const myClasse = await Classe.findByPk(parseInt(req.params.id));
  if (!myClasse) {
    res.status(404).json({ message: "Classe not found" });
    return;
  }
  res.json(myClasse);
});

classeRouter.put("/:id", async (req, res) => {
  const myClasse: any = await Classe.findByPk(parseInt(req.params.id));
  if (!myClasse) {
    res.status(404).json({ message: "Classe not found" });
    return;
  }
  myClasse.name = req.body.data.name;
  myClasse.id = req.body.data.id;
  await myClasse.save();
  res.json(myClasse);
});

classeRouter.get("/", async (req, res) => {
  if(!req.headers.authorization){
    res.status(401).json({ messages: 'Unauthorized'});
    return;
  }
  console.log(req.headers.authorization);
    
  const classes = await Eleve.findAll();
  const [login, passWord] = Buffer.from(b64auth, 'base64').toString().split(':')
  console.log(login,passWord)
  
  const classe = await classe.findOne({
    where: {
      login,
      passWord
    }
  });

classeRouter.delete("/:id", async (req, res) => {
  const myClasse: any = await Classe.findByPk(parseInt(req.params.id));
  if (!myClasse) {
    res.status(404).json({ message: "Classe not found" });
    return;
  }
  await myClasse.destroy();
  res.json({ message: "Classe deleted" });
});