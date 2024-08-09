"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const variants_1 = require("../../data/variants");
const getVariants = () => {
    return variants_1.variantArr;
};
const variantsService = { getVariants };
exports.default = variantsService;
