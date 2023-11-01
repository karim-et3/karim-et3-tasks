"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (req, res, next) => {
    console.log("in authMiddleware");
    next();
};
exports.authMiddleware = authMiddleware;
