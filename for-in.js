



const student = {
    name: "Theu",
    age: 26,
    genre: "male",
}

for (let value in student) {

    console.log(value);
    console.log(student[value]);
    console.log(`${value}:${student[value]}`)

}