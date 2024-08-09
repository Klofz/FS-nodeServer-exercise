"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const variantCategoriesService_1 = __importDefault(require("../services/variantCategoriesService"));
const variantCategoriesRouter = express_1.default.Router();
variantCategoriesRouter.get("/", (_req, res) => {
    res.send(variantCategoriesService_1.default.getVariantCategories());
});
exports.default = variantCategoriesRouter;
