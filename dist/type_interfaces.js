"use strict";
// Interface vs Types
Object.defineProperty(exports, "__esModule", { value: true });
class BioData {
    name;
    age;
    city;
    state;
    constructor(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
}
;
const std1 = new BioData("Vinod", 20, "Pune", "Maharashtra");
console.log(std1.city);
//# sourceMappingURL=type_interfaces.js.map