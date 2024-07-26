"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merchandiseData_1 = require("../../data/merchandiseData");
const getMerch = () => {
    return merchandiseData_1.merchandiseArr_mock;
};
const merchService = { getMerch };
exports.default = merchService;
