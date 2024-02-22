import { Sweet } from './sweets.js';

export class Chocolate extends Sweet {
  constructor(name, weight, cocoaContent, sugarContent, hasNuts) {
    super(name, weight, 'Chocolate', sugarContent, hasNuts);
    this.cocoaContent = cocoaContent;
  }
}