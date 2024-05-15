const dog = {
  color: "black",
  gender: "Male",
  bark() {
    console.log("The dog barked");
  },
};

console.log(dog.color);
dog.color = "white";
console.log(dog.color);

class Dog {
  constructor(color, gender) {
    this.color = color;
    this.gender = gender;
  }
  bark() {
    console.log(`The ${this.color} dog has barked.`);
  }
}

class sheperd extends Dog {
  constructor(color, gender, name) {
    super(color, gender);
    this.name = name;
  }
  run() {
    console.log(`The ${this.color} dog named ${this.name} began to run!`);
  }
}

const dog1 = new Dog("black", "Female");
const dog2 = new Dog("Brown", "Male");
const shep1 = new sheperd("White", "Female", "Rex");
console.log(dog1);
console.log(dog2);
dog2.bark();
console.log(shep1);
shep1.run();
shep1.bark();
