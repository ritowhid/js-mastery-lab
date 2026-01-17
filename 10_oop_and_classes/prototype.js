// let myName = "towhid     "
// let mySecondName = "Rakibul     "

// console.log(myName.trueLength);

let heros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.towhid = function () {
  console.log(`towhid is present in all objects`);
};

Array.prototype.heyTowhid = function () {
  console.log(`Towhid says hello`);
};

heroPower.towhid();
heros.towhid();
heros.heyTowhid();
heroPower.heyTowhid();

//->Inheritance

const User = {
  name: "towhid",
  email: "towhid@example.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "Rakibul Towhid    ";

String.prototype.truelength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.truelength();
"hitech".truelength();
"iceTea".truelength();