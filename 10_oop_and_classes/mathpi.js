const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const car = {
  name: "bmw i7",
  price: 25000000,
  isAvailable: true,

  orderCar: function () {
    console.log("car not ready");
  },
};

console.log(Object.getOwnPropertyDescriptor(car, "name"));

Object.defineProperty(car, "name", {
  //writable: false,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(car, "name"));

for (let [key, value] of Object.entries(car)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
