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
      this._numberofStudents = students;
    } else {
      console.log("Wrong input!");
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
      Math.random() * (substituteTeachers.length - 1)
    );
    return substituteTeachers[randomIndexNumber];
  }
}
