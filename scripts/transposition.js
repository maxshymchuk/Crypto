import { defaults, details } from './config.js';

export class Transposition {
  static decrypt(string, key = defaults['transposition'].key) {
    let decrypted = [];
    string = string.replace(/ /g, '_');
    details.innerHTML = '';
    (string.match(RegExp(`.{1,${key.length}}`, 'g')) || []).forEach((s, j) => {
      let temp = '';
      for (let i = 0; i < key.length; i++) {
        if (s[key.indexOf(i + 1)]) temp += s[key.indexOf(i + 1)];
      }
      decrypted.push(temp);
      details.insertAdjacentHTML('beforeend', `
        <li>${s} - ${decrypted[j]}</li>
      `)
    })
    return decrypted.join('');
  }

  static encrypt(string, key = defaults['transposition'].key) {
    let encrypted = [];
    string = string.replace(/ /g, '_');
    details.innerHTML = '';
    (string.match(RegExp(`.{1,${key.length}}`, 'g')) || []).forEach((s, j) => {
      let temp = '';
      for (let i = 0; i < key.length; i++) {
        if (s[key[i] - 1]) temp += s[key[i] - 1];
      }
      encrypted.push(temp);
      details.insertAdjacentHTML('beforeend', `
        <li>${s} - ${encrypted[j]}</li>
      `)
    })
    return encrypted.join('');
  }
}