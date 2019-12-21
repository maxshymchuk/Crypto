class Alphabet {
  static alpha() {
    return [
      'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П',
      'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я', '_'
    ];
  }

  static getPos(letter) {
    return this.alpha().indexOf(letter.toUpperCase()) + 1;
  }

  static getLetter(pos) {
    return this.alpha()[(pos + Alphabet.length() - 1) % Alphabet.length()];
  }

  static length() {
    return this.alpha().length;
  }
}