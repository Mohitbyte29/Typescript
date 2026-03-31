"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const favHobbies = (hobby) => {
    //! return hobby.map(() : void => {}); ---> will give an error
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(() => { });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("Coding");
favHobbies(["Coding", "Singing", "Chess"]);
//# sourceMappingURL=typeguard.js.map