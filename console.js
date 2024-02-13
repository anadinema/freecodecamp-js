let ageOrName = "Anadi Nema";
let x = null;
let undef = undefined;
console.log("Hello from variable type: " + typeof(ageOrName));
ageOrName = 24;
console.info("Now the variable type is: " + typeof(ageOrName));
console.info("Now the variable x type is: " + typeof(x));
console.info("Now the variable undef type is: " + typeof(undef));


const student = {
    firstName: "Anadi",
    lastName: "Nema",
    age: 24,
    isWorking: true,
};

console.log(student);
console.log("Name of student is: " + student.firstName.trim() + " " + student.lastName.trim());

console.clear();