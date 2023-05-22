"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carValueService_1 = __importDefault(require("../services/carValueService"));
const carValueController = {
    getCarValue(req, res) {
        const { model, year } = req.body;
        const carValue = carValueService_1.default.calculateCarValue(model, year);
        res.json({ car_value: carValue });
    },
};
exports.default = carValueController;
