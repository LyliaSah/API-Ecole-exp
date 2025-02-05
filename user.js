"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = yield prisma.user.create({
        login: req.body.data.login,
        passWord: req.body.data.passWord
    });
    res.status(201).json(newUser);
}));
exports.userRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myUser = yield User.findByPk(parseInt(req.params.id));
    if (!myUser) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    res.json(myUser);
}));
exports.userRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myUser = yield User.findByPk(parseInt(req.params.id));
    if (!myUser) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    myUser.login = req.body.data.login;
    myUser.passWord = req.body.data.passWord;
    yield myUser.save();
    res.json(myUser);
}));
exports.userRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield User.findAll();
    res.json(users);
}));
exports.userRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myUser = yield User.findByPk(parseInt(req.params.id));
    if (!myUser) {
        res.status(404).json({ message: "User not found" });
        return;
    }
    yield myUser.destroy();
    res.json({ message: "User deleted" });
}));
