console.log("CLASS");

//TODO Синтаксис класса
class Car {
  static description = "Это статическое свой-во ";
  constructor(modal, price) {
    console.log("Выполняется конструктор");
    console.log(this);
    this.modal = modal;
    this.price = price;
  }
  changePrice(newPrice) {
    this.price = newPrice;
  }

  //! Geter

  //   getModel() {
  //     return this.modal;
  //   }

  //!! Новый синтаксис
  get getModal() {
    return this.modal;
  }

  //!Seter
  //!Синтаксис класса
  set setModal(newModal) {
    this.modal = newModal;
  }
  //   setModal(newModal) {
  //     this.modal = newModal;
  //   }
}

const car1 = new Car("fiat", 10);

console.log(car1.getModal); //! так читается с гетера. В обычной функции - образаться к св-ву

//! Так записывается значение через set
// car1.setModal = "Audi";

// console.log(car1.getModal); //* ранее везде были вызовы методов, сечас интерфейс упростился

// //TODO делаем класс героя

class Hero {
  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

  getXp(amount) {
    console.log(`${this.name} get ${amount} xp`);
    this.xp += amount;
  }
}

const afilus = new Hero("Afilus", 10);

console.log(afilus);

class Mag extends Hero {
  constructor(name, xp, power) {
    super(name, xp);
    this.power = power;
  }
}

const dobrus = new Mag("Dobrus", 20, 100);

console.log(dobrus);
dobrus.getXp(1000);
