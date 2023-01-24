function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function(exercise) {
        console.log(`${exercise}, I do this because I have to`);
    }
}

let person1 = new Person("John Doe", "Developer", 30);
person1.exercise("Running"); // Output: Running, I do this because I have to