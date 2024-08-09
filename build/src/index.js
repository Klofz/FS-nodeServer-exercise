"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const merch_1 = __importDefault(require("./routers/merch"));
const filters_1 = __importDefault(require("./routers/filters"));
const config_1 = __importDefault(require("./utils/config"));
const brand_1 = __importDefault(require("./routers/brand"));
const products_1 = __importDefault(require("./routers/products"));
const productCategoriesRouter_1 = __importDefault(require("./routers/productCategoriesRouter"));
const variantsRouter_1 = __importDefault(require("./routers/variantsRouter"));
const variantCategoriesRouter_1 = __importDefault(require("./routers/variantCategoriesRouter"));
const app = (0, express_1.default)();
app.use(express_1.default.static("static"));
app.use(express_1.default.json());
const PORT = config_1.default.PORT;
app.get("/api/ping", (_req, res) => {
    console.log("someone pinged here");
    res.send("pong");
});
app.use("/api/merch", merch_1.default);
app.use("/api/filters", filters_1.default);
app.use("/api/brands", brand_1.default);
app.use("/api/products", products_1.default);
app.use("/api/product-categories", productCategoriesRouter_1.default);
app.use("/api/variants", variantsRouter_1.default);
app.use("/api/variant-categories", variantCategoriesRouter_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
