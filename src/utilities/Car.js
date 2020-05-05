class Car {
  #brand;
  #model;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
  }

  getBrand() {
    return this.#brand;
  }

  setBrand(brand) {
    this.#brand = brand;
  }

  getModel() {
    return this.#model;
  }

  setModel(model) {
    this.#model = model;
  }
}

export default Car;