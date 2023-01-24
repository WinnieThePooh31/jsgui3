function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;
  }
  
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;
  
  let programmer1 = new Programmer("Jane Smith", "Web Developer", 25, ["JavaScript", "Python"]);
console.log(programmer1.name); // "Jane Smith"
console.log(programmer1.job); // "Web Developer"
console.log(programmer1.age); // 25
console.log(programmer1.languages); // ["JavaScript", "Python"]
console.log(programmer1.busy); // true

programmer1.exercise();
//output : Jane Smith does exercise, I do this because I have to
programmer1.fetchJob();
//output : Jane Smith is a Web Developer
