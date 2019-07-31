// JOSEPH P. PASAOA
//



// non-question-specific function declarations
const print = (logThis, bool) => {
  bool
    ? console.log(logThis, "\n")
    : console.log(logThis);
}



// 1 //
// a & b
print("1a // Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`.");
print("Print one of their first names.");
class Person {
  constructor (firstName, lastName, middleName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
  }
  fullName() {
    return (this.firstName + (this.middleName ? ` ${this.middleName}` : '') + ` ${this.lastName}`);
  }
}

let helena = new Person("Helena", "Bonham", "Carter");
let sofia = new Person("Sofia", "Ford", "Coppola");
let jack = new Person("Jack", "Pattillo");
print(helena);
print(sofia);
print(jack);
print(sofia.firstName);

// b
print("1b // Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name.");
print("Call this method on both the instances you created in part a.");

print(helena.fullName());
print(sofia.fullName());
print(jack.fullName(), 1);
//


// 2 //
// a & b
print("2a // Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.");
class Book {
  constructor (title, author, rating) {
    this.title = title;
    this.author = author;
    this.rating = rating;
  }
  isGood() {
    return this.rating >= 7;
  }
}

let bros = new Book("The Brothers Karamazov", "Fyodor Dostoyevsky", 8.6);
let forever = new Book("Forever", "Pete Hamill", 7.8);
let some = new Book("Some Mediocre Book", "Medi Ocre", 3.8);
print(bros);
print(forever);
print(some);

// b
print("2b // Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7");
print(bros.isGood());
print(forever.isGood());
print(some.isGood(), 1);
//


// 3 //
// a
print("3a // Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.");
class Dog {
  constructor (name, breed, mood, isHungry) {
    this.name = name;
    this.breed = breed;
    this.mood = mood;
    this.isHungry = isHungry;
  }
  playFetch = () => {
    this.mood = "playful";
    this.isHungry = true;
    //
    console.log("Ruff!");
  }
  feed = () => {
    this.isHungry
      ? ( this.isHungry = false, console.log("Woof!") )
      : console.log("The dog doesn't look hungry");
  }
  toString = () => {
    let outputStr = Object.values(this).filter(key => typeof key !== "function");
    this.isHungry
      ? outputStr[outputStr.length - 1] = "hungry"
      : outputStr[outputStr.length - 1] = "not hungry";
    return outputStr.join(", ");
  }
}

let spot = new Dog("Spot", "Beagle", "idle", false);
print(spot);

// b
print("3b // Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log 'Ruff!'");

spot.playFetch();
print(spot);

// c
print("3c // Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print 'Woof!'");
print("If the dog is not hungry, it should log 'The dog doesn't look hungry'");

spot.feed();
print(spot);

// d
print("5d // Add a method called `toString` that returns a description of the dog");

print(spot.toString(), 1);
//


// 4 //
// a
print("4a // Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. ");
print("Give them all values equal to the freezing point of water.");

let freezingPoint = {
  celsius: 0,
  fahrenheit: 32,
  kelvin: 273.15
}
print(freezingPoint);

// b & c
print("4b // Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.");
class Celsius {
  constructor (celsius) {
    this.celsius = celsius;
  }
  getFahrenheitTemp = () => {
    return this.celsius * 1.8 + 32;
  }
  getKelvinTemp = () => {
    return this.celsius + 273.15;
  }
  isBelowFreezing = () => {
    return this.celsius < freezingPoint.celsius;
  }
}
let outsideTemp = new Celsius(10.0);
print(outsideTemp.celsius);
print(outsideTemp.getKelvinTemp());
print(outsideTemp.getFahrenheitTemp());

// c
print("4c // Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).");

print(outsideTemp.isBelowFreezing(), 1);
//


// 5 //
// a & b
print("5a // Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`");
class Movie {
  constructor (name, year, genre, cast, description) {
    this.name = name;
    this.year = year;
    this.genre = genre;
    this.cast = cast;
    this.description = description;
  }
  blurb = () => {
    let castStr = this.cast;
    if (castStr[1]) {
      castStr[castStr.length - 1] = `and ${castStr[castStr.length - 1]}`;
    }
    castStr = castStr.join(", ");
    return `${this.name} came out in ${this.year}. \nA film ${this.genre} starring ${castStr}. \n${this.description}`;
  }
}

let boulevard = new Movie(
  "Boulevard",
  2014,
  "drama",
  ["Robin Williams", "Roberto Aguire", "Kathy Baker"],
  "A devoted husband in a marriage of convenience is forced to confront his secret life."
);
print(boulevard);

// b
print("5b // Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.");

print(boulevard.blurb(), 1);
//


// 6 //
print("Write a constructor Vector that represents a vector in two-dimensional space.");
class Vector {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  plus = (anotherVector) => {
    return (`Vector: {x: ${this.x + anotherVector.x}, y: ${this.y + anotherVector.y}}`);
  }
  minus = (anotherVector) => {
    return (`Vector: {x: ${this.x - anotherVector.x}, y: ${this.y - anotherVector.y}}`);
  }
  getLength = () => {
    return (this.x ** 2 + this.y ** 2) ** 0.5;
  }
}

let v1 = new Vector(1, 2);
let v2 = new Vector(2, 3);
print(v1.plus(v2));
print(v1.minus(v2));

let v3 = new Vector(3, 4);
print(v3.getLength(), 1);
//


// 7 & 8 //

// 8a & 8b
print("8a // Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs 'WHHOOSSSH'");
print("8b // Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.");

class Vehicle {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }
  makeSound = () => {
    console.log("WHHOOSSSH");
  }
}

let ediths = new Vehicle("Grandma", "blue");
print(ediths.makeSound());
print(ediths, 1);
//


// 7a
print("7a // Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`");
class Car extends Vehicle {
  constructor (name, color, make, model) {
    super(name, color);
    this.make = make;
    this.model = model;
  }
  static numberOfWheels = () => {
    return 4;
  }
}

let adventure = new Car("adventure", "silver", "Toyota", "Rav4");
print(adventure);

// 7b
print("7b // Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`");
class Bike extends Vehicle {
  constructor (name, color, gears, hasBell) {
    super(name, color);
    this.gears = gears;
    this.hasBell = hasBell;
  }
  static numberOfWheels = () => {
    return 2;
  }
}

let joeys = new Bike("Giant", "white", 27, true);
print(joeys);

// 7c
print("7c // Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).");
print("Why does it make sense for this to be a static method instead of an instance method?");

print(Car.numberOfWheels(adventure));
print(Bike.numberOfWheels(joeys), 1);
//


// 8c
print("8c // Create a new `Bike` instance that has a `color` of 'green' and `name` 'Bikey McBikeface'");

let mcbike = new Bike("Bikey McBikeface", "green", 1, false);
print(mcbike);

// 8d
print("8d // Create a new `Car` instance that has a `color` of 'red' and `name` 'Carry McCarface'");

let mccar = new Car("Carry McCarface", "red", "Utter", "Jalope");
print(mccar, 1);
//
