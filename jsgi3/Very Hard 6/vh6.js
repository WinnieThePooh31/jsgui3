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
    this.offerNewTask = function() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  }
  
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;
  
  let programmer1 = new Programmer("Jane Smith", "Web Developer", 25, ["JavaScript", "Python"]);
programmer1.offerNewTask();
//output : Jane Smith can't accept any new tasks right now.
programmer1.completeTask();
programmer1.offerNewTask();
//output : Jane Smith would love to take on a new responsibility.
