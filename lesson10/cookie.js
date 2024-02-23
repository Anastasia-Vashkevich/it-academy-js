import { Sweet } from './sweets.js';

export class Cookie extends Sweet {
  constructor(name, weight, sugarContent, hasGluten, hasNuts) {
    super(name, weight, 'Cookie', sugarContent, hasNuts);
    this.hasGluten = hasGluten;
  }
}