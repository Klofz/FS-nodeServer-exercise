"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const brandsService_1 = __importDefault(require("../services/brandsService"));
const brandRouter = express_1.default.Router();
brandRouter.get("/", (_req, res) => {
    res.send(brandsService_1.default.getBrands());
});
exports.default = brandRouter;
