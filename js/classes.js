import generateVIN from "./generators.js";
const symbols = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
class Car {
  static carCreated = 0;
  #VIN_CODE = generateVIN(symbols, numbers);
  constructor({
    brand,
    model,
    gearbox,
    engineType,
    fuelType,
    color = "black",
    regionOfSale = "Europe",
    price,
  }) {
    Car.carCreated++;
    this.brand = brand;
    this.model = model;
    this.gearbox = gearbox;
    this.fuelType = fuelType;
    this.price = price;
    this.regionOfSale = regionOfSale;
    this.engineType = engineType;
    this.km = 0;
    this.windowOpen = false;
    this.doorsOpen = false;
    this.trunkOpen = false;
    this.carBonnetOpen = false;
    this.color = color;
  }
  get carColor() {
    return this.color;
  }
  set carColor(newColor) {
    this.color = newColor;
  }
  windowAction() {
    this.windowOpen = !this.windowOpen;
  }
  doorsAction() {
    this.doorsOpen = !this.doorsOpen;
  }
  trunkAction() {
    this.trunkOpen = !this.trunkOpen;
  }
  carBonnetAction() {
    this.carBonnetOpen = !this.carBonnetOpen;
  }
}
class TIR extends Car {
  constructor({
    brand,
    model,
    gearbox,
    engineType,
    fuelType,
    color = "black",
    regionOfSale = "Europe",
    price,
      image = "./images/TIR_placeholder.png"
  }) {
    super({
      brand,
      model,
      gearbox,
      engineType,
      fuelType,
      color,
      regionOfSale,
      price,
    });
    this.image = image
  }

  ride() {
    this.km += 5000;
  }
}
class SUV extends Car {
  constructor({
    brand,
    model,
    gearbox,
    engineType,
    fuelType,
    color = "black",
    regionOfSale = "Europe",
    price,
      image = "./images/SUV_placeholder.png"
  }) {
    super({
      brand,
      model,
      gearbox,
      engineType,
      fuelType,
      color,
      regionOfSale,
      price,
    });
    this.image = image
  }
  ride() {
    this.km += 500;
  }
}
class Coupe extends Car {
  constructor({
    brand,
    model,
    gearbox,
    engineType,
    fuelType,
    color = "black",
    regionOfSale = "Europe",
    price,
      image = "./images/coupe_placeholder.png"
  }) {
    super({
      brand,
      model,
      gearbox,
      engineType,
      fuelType,
      color,
      regionOfSale,
      price,
    });
    this.image = image
  }
  ride() {
    this.km += 0.5;
  }
}
class Van extends Car {
  constructor({
    brand,
    model,
    gearbox,
    engineType,
    fuelType,
    color = "black",
    regionOfSale = "Europe",
    price,
                image = "./images/van_placeholder.png"
  }) {
    super({
      brand,
      model,
      gearbox,
      engineType,
      fuelType,
      color,
      regionOfSale,
      price,
    });
    this.image = image
  }
  ride() {
    this.km += 50;
  }
}
class Sedan extends Car {
  constructor({
    brand,
    model,
    gearbox,
    engineType,
    fuelType,
    color = "black",
    regionOfSale = "Europe",
    price,
    image = "./images/sedan_placeholder.png",
  }) {
    super({
      brand,
      model,
      gearbox,
      engineType,
      fuelType,
      color,
      regionOfSale,
      price,
    });
    this.image = image
    // carImage: "./images/sedan_placeholder.png";
  }
  // get image() {
  //   return this.carImage;
  // }
  // set image(newImage) {
  //   this.carImage = newImage;
  // }
  ride() {
    this.km += 500;
  }
}
class Pickup extends Car {
  constructor({
    brand,
    model,
    gearbox,
    engineType,
    fuelType,
    color = "black",
    regionOfSale = "Europe",
    price,
      image = "./images/pickup_placeholder.png"
  }) {
    super({
      brand,
      model,
      gearbox,
      engineType,
      fuelType,
      color,
      regionOfSale,
      price,
    });
    this.image = image
  }
  ride() {
    this.km += 100;
  }
}

export { TIR, SUV, Coupe, Van, Sedan, Pickup };
