class Polyalphabetic {
  static decrypt(string) {
    let decrypted = '';
    let arr = string.split(' ');
    details.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
      const res = arr[i] % Alphabet.length();
      decrypted += Alphabet.getLetter(res);
      if (string) details.insertAdjacentHTML('beforeend', `
        <li>${arr[i]} mod ${Alphabet.length()} = ${res} (${Alphabet.getLetter(res)})</li>
      `)
    }
    return string ? decrypted : undefined;
  }

  static encrypt(string, key) {
    let encrypted = '';
    string = string.replace(/ /g, '_');
    details.innerHTML = '';
    for (let i = 0; i < string.length; i++) {
      const value = Alphabet.getPos(string[i]) + Alphabet.length() * (i % key);
      encrypted += `${value} `;
      details.insertAdjacentHTML('beforeend', `
        <li>${Alphabet.getPos(string[i])} + ${Alphabet.length()} * ${i % key} = ${value}</li>
      `)
    }
    return encrypted;
  }
}