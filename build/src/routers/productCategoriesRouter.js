"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productCategoriesService_1 = __importDefault(require("../services/productCategoriesService"));
const productCategoriesRouter = express_1.default.Router();
productCategoriesRouter.get("/", (_req, res) => {
    res.send(productCategoriesService_1.default.getProductCategories());
});
exports.default = productCategoriesRouter;
