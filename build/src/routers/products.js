"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsService_1 = __importDefault(require("../services/productsService"));
const productsRouter = express_1.default.Router();
productsRouter.get("/", (_req, res) => {
    res.send(productsService_1.default.getProducts());
});
exports.default = productsRouter;
