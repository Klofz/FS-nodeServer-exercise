"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const merchService_1 = __importDefault(require("../services/merchService"));
const merchRouter = express_1.default.Router();
merchRouter.get("/", (_req, res) => {
    res.send(merchService_1.default.getMerch());
});
exports.default = merchRouter;
