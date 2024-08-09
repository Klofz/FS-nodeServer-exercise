"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brands_1 = require("../../data/brands");
const getBrands = () => {
    return brands_1.brandArr;
};
const brandsService = { getBrands };
exports.default = brandsService;
