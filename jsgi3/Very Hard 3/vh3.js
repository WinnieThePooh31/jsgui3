function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function() {
      console.log(`${this.name} does exercise, I do this because I have to`);
    }
    this.fetchJob = function() {
      console.log(`${this.name} is a ${this.job}`);
    }
  }
  let person1 = new Person("John Smith", "Developer", 30);
person1.fetchJob();
//output : John Smith is a Developer
