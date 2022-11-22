import { TIR, SUV, Coupe, Van, Sedan, Pickup } from "./js/classes.js";
import loader from './js/loader.js'
let carArray = [];

const getEl = (selector) => document.querySelector(selector);
getEl(".orderForm").addEventListener("submit", getData);

checkLocalStorage();

getEl('[type="button"]').addEventListener('click', clearOrders)

function getData(event) {
  event.preventDefault();
  let configurator = {
    brand: getEl('[name="brandInput"]').value,
    model: getEl('[name="modelInput"]').value,
    gearbox: getEl('[name="gearboxTypeInput"]').value,
    engineType: getEl('[name="engineTypeInput"]').value,
    fuelType: getEl('[name="fuelTypeInput"]').value,
    color: getEl('[name="colorInput"]').value,
    regionOfSale: getEl('[name="regionOfSaleInput"]').value,
    price: getEl('[name="priceInput"]').value,
    carType: getEl('[name="carTypeInput"]').value,
  };
  let car;
  switch (configurator.carType) {
    case "Sedan":
      car = new Sedan(configurator);
      break;
    case "TIR":
      car = new TIR(configurator);
      break;
    case "SUV":
      car = new SUV(configurator);
      break;
    case "Pickup":
      car = new Pickup(configurator);
      break;
    case "Coupe":
      car = new Coupe(configurator);
      break;
    case "Van":
      car = new Van(configurator);
      break;
    default:
      return;
  }
  console.log(car)
  carArray.push(car);
  event.currentTarget.reset();
  localStorage.setItem("carsOrders", JSON.stringify(carArray));
  let getItem = JSON.parse(localStorage.getItem("carsOrders"));
  setTimeout(() => { updateMarkup(getItem) }, 5000);
  getEl(".carList").innerHTML = loader;
}

function checkLocalStorage() {
  if (localStorage.getItem("carsOrders") !== null) {
    let getItem = JSON.parse(localStorage.getItem("carsOrders"));
    console.log(getItem);
    carArray = [...getItem];
    setTimeout(() => { updateMarkup(carArray) }, 5000)
    getEl(".carList").innerHTML = loader;
  } else {
    getEl(".carList").innerHTML = `<li class="no-orders">Замовлень немає</li>`;
  }
}

function updateMarkup(carArray) {
  const markup = carArray
    .map(
      (item) => `
                <li class="carItem">
                <div class="imageContainer">
                    <img class="carImage" src=${item.image} alt="">
                </div>
                <p class="carDesc"><span>Brand:</span> <span>${item.brand}</span></p>
                <p class="carDesc"><span>Model:</span> <span>${item.model}</span></p>
                <p class="carDesc"><span>Gearbox Type:</span> <span>${item.gearbox}</span></p>
                <p class="carDesc"><span>Fuel Type:</span> <span>${item.fuelType}</span></p>
                <p class="carDesc"><span>Region:</span> <span>${item.regionOfSale}</span></p>
                <p class="carDesc"><span>Engine Type:</span> <span>${item.engineType}</span></p>
                <p class="carDesc"><span>Km:</span> <span>${item.km}</span></p>
                <p class="carDesc"><span>Color:</span> <span>${item.color}</span></p>
                <p class="carDesc"><span>Price:</span> <span>${item.price}$</span></p>
            </li>`
    )
    .join("");
  getEl(".carList").innerHTML = markup;
}

function clearOrders() {
  localStorage.clear()
  updateMarkup(carArray)
  getEl(".carList").innerHTML = loader;
  setTimeout(() => { getEl(".carList").innerHTML = `<li class="no-orders">Замовлень немає</li>`; console.log(123) }
    , 5000)
}
