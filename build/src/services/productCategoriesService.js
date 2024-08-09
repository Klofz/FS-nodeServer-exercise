"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_categories_1 = require("../../data/products_categories");
const getProductCategories = () => {
    return products_categories_1.productCategoryArr;
};
const productCategoriesService = { getProductCategories };
exports.default = productCategoriesService;
