class Car2 {
  #brand;
  #model;

  constructor(brand, model) {
    this.#brand = brand;
    this.#model = model;
  }

  get brand() {
    return this.#brand;
  }

  set brand(brand) {
    this.#brand = brand;
  }

  get model() {
    return this.#model;
  }

  set model(model) {
    this.#model = model;
  }
}

export default Car2;