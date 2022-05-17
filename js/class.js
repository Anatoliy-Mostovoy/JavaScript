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
car1.setModal = "Audi";

console.log(car1.getModal);
