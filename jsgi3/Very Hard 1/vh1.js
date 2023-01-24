function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}

let person1 = new Person("John Doe", "Developer", 30);
console.log(person1.name); // Output: John Doe
console.log(person1.job); // Output: Developer
console.log(person1.age); // Output: 30
