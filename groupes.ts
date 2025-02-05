import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export const groupeRouter = Router();

groupeRouter.post('/', async (req, res) => {
  const groupe = await prisma.groupe.create({
    data: { 
      email:  ,
    }
    namegroupe: req.body.data.namegroupe,
    numbergroupe: req.body.data.numbergroupe
  });
  res.status(201).json(groupe);
})

groupeRouter.get("/:id", async (req, res) => {
  const myGroupe = await Groupe.findByPk(parseInt(req.params.id));
  if(!myGroupe) {
    res.status(404).json({ message: "Groupe not found" });
    return;
  }
  else {
    res.json(myGroupe)
  }
})

groupeRouter.put("/:id", async (req, res) => {
  const myGroupe: any = await Groupe.findByPk(parseInt(req.params.id));
  if(!myGroupe) {
    res.status(404).json({ message: "Groupe not found" });
    return;
  }
  else {
    myGroupe.namegroupe = req.body.data.namegroupe;
    myGroupe.numbergroupe = req.body.data.numbergroupe;
            await myGroupe.save();
    res.json(myGroupe);
  }
})

groupeRouter.get("/", async (req, res) => {
  const groupes = await Groupe.findAll();
  res.json(groupes);
})

groupeRouter.delete("/:id", async (req, res) => {
  const myGroupe: any = await Groupe.findByPk(parseInt(req.params.id));
   if(!myGroupe) {
    res.status(404).json({ message: "Groupe not found" });
    return;
  }
  else {
    await myGroupe.destroy();
    res.json({ message: "Groupe deleted" });
  }
})