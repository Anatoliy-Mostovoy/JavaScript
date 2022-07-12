console.log("CLASS");

//TODO Синтаксис класса
// class Car {
//   static description = "Это статическое свой-во ";
//   constructor(modal, price) {
//     console.log("Выполняется конструктор");
//     console.log(this);
//     this.modal = modal;
//     this.price = price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//! Geter

//   getModel() {
//     return this.modal;
//   }

//!! Новый синтаксис
// get getModal() {
//   return this.modal;
// }

//!Seter
//!Синтаксис класса
// set setModal(newModal) {
//   this.modal = newModal;
// }
//   setModal(newModal) {
//     this.modal = newModal;
//   }
// }

// const car1 = new Car("fiat", 10);

// console.log(car1.getModal); //! так читается с гетера. В обычной функции - обращаються к св-ву

//! Так записывается значение через set
// car1.setModal = "Audi";

// console.log(car1.getModal); //* ранее везде были вызовы методов, сечас интерфейс упростился
// car1.getModal = newModel; //* так запісивается в сетер
// //TODO делаем класс героя

// class Hero {
//   constructor({ name = "Hero", xp = 0 }) {
//     this.name = name;
//     this.xp = xp;
//   }

//   getXp(amount) {
//     console.log(`${this.name} get ${amount} xp`);
//     this.xp += amount;
//   }
// }

// const jorjo = new Hero({ name: "Jorjo", xp: 10 });

// console.log(jorjo);
// jorjo.getXp(5);
// console.log(jorjo);

// class Mag extends Hero {
//   constructor({ clan, weapon, ...paramsHero }) {
//     super(paramsHero);
//     this.clan = clan;
//     this.weapon = weapon;
//   }
//   getAttack() {
//     console.log(`${this.name} attack ${this.weapon}`);
//   }
// }

// const furion = new Mag({
//   name: "Furion",
//   xp: 20,
//   clan: "Mag",
//   weapon: "lightning",
// });

// console.log(furion);
// furion.getAttack();
// furion.getXp(10);

// console.log(furion);

// class Orc extends Mag {
//   constructor({ health = 0, ...params }) {
//     super(params);
//     this.health = health;
//   }
// }
// const skretcher = new Orc({
//   name: "Skretcher",
//   xp: 5,
//   weapon: "axe",
//   clan: "Orc",
//   health: 1000,
// });

// console.log(skretcher);
// skretcher.getAttack();
// skretcher.getXp(1);
// console.log(skretcher);

//*ToDo функція конструктор

function Car(brand, model, price) {
  (this.brand = brand), (this.price = price), (this.model = model);
}
//! добовленіе методов на єкземлпяр класса
Car.prototype.getPrice = function () {
  //* и прототіпе лежіт функція конструктор в которую запісиваем все методи работи со свойствамі
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  return (this.price = newPrice);
};

const audi = new Car("Audi", "Q1", 20000);

console.log(audi.getPrice());

//! Class
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  //TODO по суті делает то же самое - запісивает метод на Car.prototype.getPrice =
  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}
