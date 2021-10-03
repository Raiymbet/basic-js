import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  
  chains: [],

  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.length = this.chains.push('( '+String(value)+' )');
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || position > this.chains.length) {
      throw new Error("You can\'t remove incorrect link!");
    }

    this.chains.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chains.reverse();
    return this;
  },
  finishChain() {
    const result = this.chains.join('~~');
    this.chains = [];
    return result;
  }
};

// import chainMaker from '../src/simple-chain.js';
// chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0)