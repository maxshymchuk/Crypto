import { defaults, details } from './config.js';
import { Alphabet } from './alphabet.js';

export class Vigenere {
  static decrypt(string, key = defaults['vigenere'].key) {
    let decrypted = '';
    details.innerHTML = '';
    string = string.replace(/ /g, '_');
    for (let i = 0; i < string.length; i++) {
      let value = (Alphabet.getPos(string[i]) - Alphabet.getPos(key[i % key.length])) % Alphabet.length();
      decrypted += Alphabet.getLetter(value);
      details.insertAdjacentHTML('beforeend', `
        <li>(${Alphabet.getPos(string[i])} - ${Alphabet.getPos(key[i % key.length])}) mod ${Alphabet.length()} = ${value < 0 ? Alphabet.length() + value : value} (${Alphabet.getLetter(value)})</li>
      `)
    }
    return decrypted;
  }

  static encrypt(string, key = defaults['vigenere'].key) {
    let encrypted = '';
    details.innerHTML = '';
    string = string.replace(/ /g, '_');
    for (let i = 0; i < string.length; i++) {
      const value = (Alphabet.getPos(string[i]) + Alphabet.getPos(key[i % key.length])) % Alphabet.length();
      encrypted += Alphabet.getLetter(value);
      details.insertAdjacentHTML('beforeend', `
        <li>(${Alphabet.getPos(string[i])} + ${Alphabet.getPos(key[i % key.length])}) mod ${Alphabet.length()} = ${value} (${Alphabet.getLetter(value)})</li>
      `)
    }
    return encrypted;
  }
}