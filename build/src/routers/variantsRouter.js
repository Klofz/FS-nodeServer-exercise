"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const variantsService_1 = __importDefault(require("../services/variantsService"));
const variantsRouter = express_1.default.Router();
variantsRouter.get("/", (_req, res) => {
    res.send(variantsService_1.default.getVariants());
});
exports.default = variantsRouter;
