type personInfo = readonly [string, number, boolean];

const displayPersonInfo: (person: personInfo) => void = (
  person: personInfo,
): void => {
  const [name, age, hasDriverLicense] = person;
  console.log(`Name: ${name}, Age: ${age}, Driver's License: ${hasDriverLicense ? "Yes" : "No"}`);
};

const person1: personInfo = ["Mohit", 20, true];
const person2: personInfo = ["Vinod", 15, false];

displayPersonInfo(person1)
displayPersonInfo(person2)


