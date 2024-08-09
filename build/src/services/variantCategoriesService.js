"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variant_categories_1 = require("../../data/variant_categories");
const getVariantCategories = () => {
    return variant_categories_1.variantCategoryArr;
};
const variantCategoriesService = { getVariantCategories };
exports.default = variantCategoriesService;
