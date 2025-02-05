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
exports.movieRouter = void 0;
const express_1 = require("express");
const index_1 = require("../index");
exports.movieRouter = (0, express_1.Router)();
exports.movieRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newMovie = yield index_1.Movie.create({
        title: req.body.data.title,
        releaseDate: req.body.data.releaseDate
    });
    res.status(201).json(newMovie);
}));
exports.movieRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myMovie = yield index_1.Movie.findByPk(parseInt(req.params.id));
    if (!myMovie) {
        res.status(404).json({ message: "Movie not found" });
        return;
    }
    res.json(myMovie);
}));
exports.movieRouter.put("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myMovie = yield index_1.Movie.findByPk(parseInt(req.params.id));
    if (!myMovie) {
        res.status(404).json({ message: "Movie not found" });
        return;
    }
    myMovie.title = req.body.data.title;
    myMovie.releaseDate = req.body.data.releaseDate;
    yield myMovie.save();
    res.json(myMovie);
}));
exports.movieRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.headers.authorization) {
        res.status(401).json({ messages: 'Unauthorized' });
        return;
    }
    console.log(req.headers.authorization);
    const movies = yield index_1.Movie.findAll();
    const [login, passWord] = Buffer.from(b64auth, 'base64').toString().split(':');
    console.log(login, passWord);
    const user = yield User.findOne({
        where: {
            login,
            passWord
        }
    });
    if (!user) {
        res.status(403).json({ message: 'forbiden' });
    }
    else {
        let movies = yield index_1.Movie.findAll();
        const pagination = req.query.pagination, limite;
    }
}), ..., ..., ...);
if (pagination && pagination.limit)
    ;
;
exports.movieRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myMovie = yield index_1.Movie.findByPk(parseInt(req.params.id));
    if (!myMovie) {
        res.status(404).json({ message: "Movie not found" });
        return;
    }
    yield myMovie.destroy();
    res.json({ message: "Movie deleted" });
}));
