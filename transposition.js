class Transposition {
  static decrypt(string, key) {
    let decrypted = [];
    key = key.split(' ').map(i => +i);
    string = string.replace(/ /g, '_');
    details.innerHTML = '';
    (string.match(RegExp(`.{1,${key.length}}`, 'g')) || []).forEach((s, j) => {
      let temp = '';
      for (let i = 0; i < s.length; i++) temp += s[key.indexOf(i + 1)];
      decrypted.push(temp);
      details.insertAdjacentHTML('beforeend', `
        <li>${s} - ${decrypted[j]}</li>
      `)
    })
    return decrypted.join('');
  }

  static encrypt(string, key) {
    let encrypted = [];
    key = key.split(' ').map(i => +i);
    string = string.replace(/ /g, '_');
    details.innerHTML = '';
    (string.match(RegExp(`.{1,${key.length}}`, 'g')) || []).forEach((s, j) => {
      let temp = '';
      for (let i = 0; i < s.length; i++) temp += s[key[i] - 1];
      encrypted.push(temp);
      details.insertAdjacentHTML('beforeend', `
        <li>${s} - ${encrypted[j]}</li>
      `)
    })
    return encrypted.join('');
  }
}