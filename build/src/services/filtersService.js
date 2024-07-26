"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterTagsData_1 = require("../../data/filterTagsData");
const getFilters = () => {
    return filterTagsData_1.filtersTagArr_mock;
};
const filtersService = { getFilters };
exports.default = filtersService;
