import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  direct = true;
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    let encryptedMessage = '', left_shift = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < message.length; i++) {
      let index = this.alphabet.indexOf(message.charAt(i)),
          key_index = this.alphabet.indexOf(key.charAt((i-left_shift) % key.length));
      
      if (index === -1) {
        encryptedMessage += message.charAt(i);
        left_shift += 1;
      } else {
        encryptedMessage += this.alphabet.charAt((index + key_index)%this.alphabet.length);
      }
    }

    return this.direct ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    let decryptedMessage = '', left_shift = 0;
    key = key.toUpperCase();

    for (let i = 0; i < encryptedMessage.length; i++) {
      let index = this.alphabet.indexOf(encryptedMessage.charAt(i)),
          key_index = this.alphabet.indexOf(key.charAt((i-left_shift) % key.length));
      
      if (index === -1) {
        decryptedMessage += encryptedMessage.charAt(i);
        left_shift += 1;
      } else {
        decryptedMessage += this.alphabet.charAt((index - key_index + this.alphabet.length)%this.alphabet.length);
      }
    }

    return this.direct ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

const directMachine = new VigenereCipheringMachine();
directMachine.encrypt('attack at dawn!', 'alphonse')
