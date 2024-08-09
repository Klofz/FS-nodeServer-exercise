"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("../../data/products");
const getProducts = () => {
    return products_1.productArr;
};
const productsService = { getProducts };
exports.default = productsService;
