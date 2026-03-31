"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Temperature {
    _celsius = 0;
    set celsius(newCelsius) {
        this._celsius = newCelsius;
    }
    get celsius() {
        return this._celsius;
    }
    get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }
    set fahrenheit(newFah) {
        this._celsius = (newFah - 32) * 5 / 9;
    }
}
const temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);
console.log(temp.celsius);
temp.fahrenheit = 77;
console.log(temp.fahrenheit);
console.log(temp.celsius);
//# sourceMappingURL=TemparatureConverter.js.map