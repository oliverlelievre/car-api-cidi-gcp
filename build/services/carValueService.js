"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const carValueService = {
    calculateCarValue(model, year) {
        const modelName = model.replace(/[^a-zA-Z]/g, '').toUpperCase();
        const alphabetPositions = [...modelName].map((char) => char.charCodeAt(0) - 64);
        if (alphabetPositions.length === 0 || year <= 0) {
            return null;
        }
        const carValue = alphabetPositions.reduce((sum, position) => sum + position, 0) * 100 + year;
        return carValue;
    },
};
exports.default = carValueService;
