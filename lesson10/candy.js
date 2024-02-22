import { Sweet } from './sweets.js';

export class Candy extends Sweet {
  constructor(name, weight, flavor, sugarContent, candyType, hasNuts) {
    super(name, weight, 'Candy', sugarContent, hasNuts);
    this.flavor = flavor;
    this.candyType = candyType;
  }
}