import { Router } from "express";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient()

export const eleveRouter = Router();

eleveRouter.post('/', async (req, res) => {
  const newEleve = await Eleve.create({
    name: req.body.data.name,
    firstname: req.body.data.firstnamename,
     });
  res.status(201).json(newEleve);
});

eleveRouter.get("/:id", async (req, res) => {
  const myEleve = await Eleve.findByPk(parseInt(req.params.id));
  if (!myEleve) {
    res.status(404).json({ message: "Eleve not found" });
    return;
  }
  res.json(myEleve);
});

eleveRouter.put("/:id", async (req, res) => {
  const myEleve: any = await Eleve.findByPk(parseInt(req.params.id));
  if (!myEleve) {
    res.status(404).json({ message: "Eleve not found" });
    return;
  }
  myEleve.name = req.body.data.name;
  myEleve.firstnamename = req.body.data.firstname;
  await myEleve.save();
  res.json(myEleve);
});

eleveRouter.get("/", async (req, res) => {
  if(!req.headers.authorization){
    res.status(401).json({ messages: 'Unauthorized'});
    return;
  }
  console.log(req.headers.authorization);
    
  const eleves = await Eleve.findAll();
  const [login, passWord] = Buffer.from(b64auth, 'base64').toString().split(':')
  console.log(login,passWord)
  
  const eleve = await eleve.findOne({
    where: {
      login,
      passWord
    }
  });

eleveRouter.delete("/:id", async (req, res) => {
  const myEleve: any = await Eleve.findByPk(parseInt(req.params.id));
  if (!myEleve) {
    res.status(404).json({ message: "Eleve not found" });
    return;
  }
  await myEleve.destroy();
  res.json({ message: "Eleve deleted" });
});