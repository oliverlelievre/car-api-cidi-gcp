"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const carValueController_1 = __importDefault(require("../controllers/carValueController"));
const router = express_1.default.Router();
router.post('/', carValueController_1.default.getCarValue);
exports.default = router;
