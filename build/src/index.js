"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const merch_1 = __importDefault(require("./routers/merch"));
const filters_1 = __importDefault(require("./routers/filters"));
const config_1 = __importDefault(require("./utils/config"));
const app = (0, express_1.default)();
app.use(express_1.default.static("static_dist"));
app.use(express_1.default.json());
const PORT = config_1.default.PORT;
app.get("/api/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});
app.use("/api/merch", merch_1.default);
app.use("/api/filters", filters_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
