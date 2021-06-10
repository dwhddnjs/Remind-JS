//연습

class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name} 을 파는 음식점들`);
    console.log(this.brands.join(", "));
  }
}

const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노");

const chicken = new Food("치킨");
chicken.addBrand("굽네");
chicken.addBrand("네네");

pizza.print();
chicken.print();
