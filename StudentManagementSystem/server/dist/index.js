"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const gradeRoutes_1 = __importDefault(require("./routes/gradeRoutes"));
const subjectRoutes_1 = __importDefault(require("./routes/subjectRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = process.env.PORT || 3030;
app.use(studentRoutes_1.default);
app.use(courseRoutes_1.default);
app.use(gradeRoutes_1.default);
app.use(subjectRoutes_1.default);
app.use((err, req, res, next) => {
    res.status(err.status).json({
        message: err.message,
    });
});
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
