import { Candy } from './candy.js';
import { Chocolate } from './chocolate.js';
import { Cookie } from './cookie.js';

export class NewYearGift {
  constructor() {
    this.sweets = [];
  }

        addSweet(sweet) {
            this.sweets.push(sweet);
          }
        
          getTotalWeight() {
            return this.sweets.reduce((total, sweet) => total + sweet.weight, 0);
          }
        
          sortSweets(parameter) {
            return this.sweets.sort((a, b) => a[parameter] - b[parameter]);
          }
        
          findSweetByWeight(minWeight, maxWeight) {
            return this.sweets.filter(sweet => sweet.weight >= minWeight && sweet.weight <= maxWeight);
          }
        }

  const gift = new NewYearGift();

  gift.addSweet(new Candy("Candy Mint", 10, "mint", 30, "lollipop", false));
  gift.addSweet(new Candy("Chupa-Chups", 12, "orange", 33, "lollipop", false));
  gift.addSweet(new Candy("Barbaris", 8, "barbaric", 25, "lollipop", false));
  gift.addSweet(new Candy("Aeroflotski", 10, "chocolate", 37, "candy", true));
  gift.addSweet(new Chocolate("Snickers", 50, 60, 45, true));
  gift.addSweet(new Chocolate("Mars", 40, 62, 45, false));
  gift.addSweet(new Chocolate("Bounty", 120, 80, 45, false));
  gift.addSweet(new Cookie("Ovsyannoe", 20, "honey", 25, false, true));
  gift.addSweet(new Cookie("Oreo", 10, "klassik", 44, false, false));
  gift.addSweet(new Cookie("Barni", 11, "milk + chocolate", 56, false, false));


  console.log(`Общий вес подарка: ${gift.getTotalWeight()} грамм`);
  
  console.log("Сладости в подарке, отсортированные по весу:");
  console.log(gift.sortSweets("weight"));
  
  console.log("Поиск конфеты с содержанием сахара не более 30%:");
  console.log(gift.sweets.filter(sweet => sweet.sugarContent <= 30));