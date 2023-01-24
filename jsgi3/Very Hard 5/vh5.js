function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;
    this.completeTask = function() {
      this.busy = false;
    }
    this.acceptNewTask = function() {
      this.busy = true;
    }
  }
  
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;
  
  let programmer1 = new Programmer("Jane Smith", "Web Developer", 25, ["JavaScript", "Python"]);
console.log(programmer1.busy); // true
programmer1.completeTask();
console.log(programmer1.busy); // false
programmer1.acceptNewTask();
console.log(programmer1.busy); // true
