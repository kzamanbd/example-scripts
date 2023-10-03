"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sixDigitsColorHex = exports.getColorName = exports.isValidHexColorCode = exports.getTextColor = void 0;
// @ts-ignore
const color_namer_1 = __importDefault(require("color-namer"));
// @ts-ignore
const color_convert_1 = __importDefault(require("color-convert"));
const CMY_HUES = [180, 300, 60];
const RGB_HUES = [360, 240, 120, 0];
function getTextColor(color) {
    const rgbColor = color_convert_1.default.hex.rgb(color);
    if (!rgbColor) {
        return "#333";
    }
    const [r, g, b] = rgbColor;
    const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luma < 120 ? "#FFF" : "#333";
}
exports.getTextColor = getTextColor;
function hueShift(hues, hue, intensity) {
    const closestHue = hues.sort((a, b) => Math.abs(a - hue) - Math.abs(b - hue))[0], hueShift = closestHue - hue;
    return Math.round(intensity * hueShift * 0.5);
}
function lighten(hex, intensity) {
    if (!hex) {
        return "";
    }
    const [h, s, v] = color_convert_1.default.hex.hsv(hex);
    const hue = h + hueShift(CMY_HUES, h, intensity);
    const saturation = s - Math.round(s * intensity);
    const value = v + Math.round((100 - v) * intensity);
    return `#${color_convert_1.default.hsv.hex([hue, saturation, value])}`;
}
function darken(hex, intensity) {
    if (!hex) {
        return "";
    }
    const inverseIntensity = 1 - intensity;
    const [h, s, v] = color_convert_1.default.hex.hsv(hex);
    const hue = h + hueShift(RGB_HUES, h, inverseIntensity);
    const saturation = s + Math.round((100 - s) * inverseIntensity);
    const value = v - Math.round(v * inverseIntensity);
    return `#${color_convert_1.default.hsv.hex([hue, saturation, value])}`;
}
function isValidHexColorCode(str) {
    return /^#([0-9A-Fa-f]{3}){1,2}$/.test(str);
}
exports.isValidHexColorCode = isValidHexColorCode;
function getColorName(color) {
    const { name } = (0, color_namer_1.default)(`#${color}`.replace("##", "#")).ntc[0];
    const sanitizedName = name.replace(/['/]/gi, "").replace(/\s+/g, "-").toLowerCase();
    return sanitizedName;
}
exports.getColorName = getColorName;
function sixDigitsColorHex(hexColor) {
    const hexValue = hexColor.replace("#", "");
    return `#${hexValue.length === 3 ? hexValue.replace(/(.)/g, "$1$1") : hexValue.padEnd(6, "0")}`;
}
exports.sixDigitsColorHex = sixDigitsColorHex;
function default_1(baseColor) {
    if (!baseColor) {
        return;
    }
    const fullColorCode = sixDigitsColorHex(baseColor);
    const name = getColorName(fullColorCode);
    const response = {
        name,
        colors: {
            500: fullColorCode
        }
    };
    const intensityMap = {
        50: 0.95,
        100: 0.9,
        200: 0.75,
        300: 0.6,
        400: 0.3,
        600: 0.9,
        700: 0.75,
        800: 0.6,
        900: 0.45,
        950: 0.29
    };
    [50, 100, 200, 300, 400].forEach((level) => {
        response.colors[level] = lighten(fullColorCode, intensityMap[level]);
    });
    [600, 700, 800, 900, 950].forEach((level) => {
        response.colors[level] = darken(fullColorCode, intensityMap[level]);
    });
    return response;
}
exports.default = default_1;
//# sourceMappingURL=colors.js.map