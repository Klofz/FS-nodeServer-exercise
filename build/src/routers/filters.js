"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const filtersService_1 = __importDefault(require("../services/filtersService"));
const filtersRouter = express_1.default.Router();
filtersRouter.get("/", (_req, res) => {
    res.send(filtersService_1.default.getFilters());
});
exports.default = filtersRouter;
