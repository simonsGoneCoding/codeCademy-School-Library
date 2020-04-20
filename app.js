class School {
  constructor(name, level, numberofStudents) {
    this._name = name;
    this._level = level;
    this._numberofStudents = numberofStudents;
  }

  //getters:
  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberofStudents() {
    return this._numberofStudents;
  }

  //setters:
  set numberofStudents(students) {
    if (typeof students === "number") {
      return (this._numberofStudents = students);
    } else {
      return console.log("Wrong input!");
    }
  }

  //methods:
  quickFacts() {
    console.log(
      `${this.name} educates ${this.numberofStudents} students at the ${this.level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndexNumber = Math.floor(
      Math.random() * substituteTeachers.length
    );
    return substituteTeachers[randomIndexNumber];
  }
}

class PrimarySchool extends School {
  constructor(name, numberofStudents, pickupPolicy) {
    super(name, "Primary", numberofStudents);
    this._pickupPolicy = pickupPolicy;
  }
  //getters:
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberofStudents, sportsTeams) {
    super(name, "High School", numberofStudents);
    this._sportsTeams = sportsTeams;
  }
  //getter:
  get sportsTeams() {
    return this._sportsTeams;
  }
}

//instances of classes:
const lorraineHansbury = new PrimarySchool(
  "Lorraine Hansbury",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
lorraineHansbury.quickFacts();
const subTeacher = School.pickSubstituteTeacher([
  "Jamal Crawford",
  "Lou Williams",
  "J. R. Smith",
  "James Harden",
  "Jason Terry",
  "Manu Ginobli",
]);
console.log(subTeacher);

const alSmith = new HighSchool("Al E. Smsith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
