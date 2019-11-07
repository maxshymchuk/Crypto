class OpenedKey {
  static decrypt(string, key) {
    let decrypted = '';
    details.innerHTML = '';
    string = string.replace(/ /g, '_');
    for (let i = 0; i < string.length; i++) {
      const value = (Alphabet.getPos(string[i]) - Alphabet.getPos(key[i])) % Alphabet.length();
      decrypted += Alphabet.getLetter(value);
      key += decrypted[i];
      details.insertAdjacentHTML('beforeend', `
        <li>(${Alphabet.getPos(string[i])} - ${Alphabet.getPos(key[i % key.length])}) mod ${Alphabet.length()} = ${value < 0 ? Alphabet.length() + value : value} (${Alphabet.getLetter(value)})</li>
      `)
    }
    return decrypted;
  }

  static encrypt(string, key) {
    let encrypted = '';
    key = key + string;
    details.innerHTML = '';
    string = string.replace(/ /g, '_');
    for (let i = 0; i < string.length; i++) {
      const value = (Alphabet.getPos(string[i]) + Alphabet.getPos(key[i])) % Alphabet.length();
      encrypted += Alphabet.getLetter(value);
      details.insertAdjacentHTML('beforeend', `
        <li>(${Alphabet.getPos(string[i])} + ${Alphabet.getPos(key[i % key.length])}) mod ${Alphabet.length()} = ${value} (${Alphabet.getLetter(value)})</li>
      `)
    }
    return encrypted;
  }
}