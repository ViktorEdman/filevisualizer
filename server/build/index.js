"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const child_process_1 = __importDefault(require("child_process"));
const app = (0, express_1.default)();
const PORT = 8580;
const HOST = '0.0.0.0';
app.get("/api", (_, res) => {
    const filePaths = String(child_process_1.default.execSync('find ".." -not -path "*node_modules*" -not -path "*.git*"'))
        .split('\n')
        .map(string => string.substring(3))
        .filter(string => string.length > 0);
    res.send(JSON.stringify(filePaths));
});
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening at${HOST}:${PORT}`);
});
