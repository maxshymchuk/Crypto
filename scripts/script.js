import { defaults } from './config.js';
import { Vigenere } from './vigenere.js';
import { OpenedKey } from './opened_key.js';
import { ClosedKey } from './closed_key.js';
import { Polyalphabetic } from './polyalphabetic.js';
import { Transposition } from './transposition.js';

const calcInput = document.getElementById('calc__input');
const calcOutput = document.getElementById('calc__output');
const calcKey = document.getElementById('calc__key');

const container = document.body.querySelector('.container');
const radioDecrypt = document.getElementById('radio__decrypt');
const radioEncrypt = document.getElementById('radio__encrypt');

function recalc() {
  const cryptoMode = document.getElementById('radio__decrypt').checked ? 'decrypt' : 'encrypt';
  const cryptoType = document.querySelector('.crypto input:checked').id;
  const params = [calcInput.value, calcKey.value || undefined];
  switch (cryptoType) {
    case 'crypto__vigenere':
      calcOutput.value = Vigenere[cryptoMode](...params);
      break;
    case 'crypto__opened_key':
      calcOutput.value = OpenedKey[cryptoMode](...params);
      break;
    case 'crypto__closed_key':
      calcOutput.value = ClosedKey[cryptoMode](...params);
      break;
    case 'crypto__polyalphabetic':
      calcOutput.value = Polyalphabetic[cryptoMode](...params);
      break;
    case 'crypto__transposition':
      calcOutput.value = Transposition[cryptoMode](...params);
      break;
  }
}

function changeMetaColor() {
  setTimeout(() => {
    document.getElementById('meta_color').content = window.getComputedStyle(container).getPropertyValue('background-color');
  }, 500)
}

document.body.onload = () => {
  const selectedTheme = localStorage.getItem('color_theme_id');
  const selectedType = localStorage.getItem('crypto_selected_id');
  const selectedMode = localStorage.getItem('crypto_selected_mode');
  if (selectedTheme) {
    document.getElementById(selectedTheme).checked = true;
  }
  changeMetaColor();
  radio__light.onchange = radio__dark.onchange = (e) => {
    localStorage.setItem('color_theme_id', e.target.id);
    changeMetaColor();
  }
  document.querySelectorAll('.crypto input').forEach(i => {
    i.onchange = () => {
      recalc();
      localStorage.setItem('crypto_selected_id', i.id);
      calcKey.placeholder = defaults[i.id.replace('crypto__', '')].placeholder;
    };
  })
  if (selectedType) {
    document.getElementById(selectedType).checked = true;
    document.getElementById(selectedType).onchange();
  }
  calcInput.addEventListener('keyup', recalc);
  calcKey.addEventListener('keyup', recalc);
  document.getElementById(`radio__${selectedMode || 'decrypt'}`).checked = true;
  radioDecrypt.onchange = radioEncrypt.onchange = (e) => {
    recalc();
    localStorage.setItem('crypto_selected_mode', e.target.id.replace('radio__', ''));
  }
  calcOutput.addEventListener('keypress', (e) => e.preventDefault());
  document.getElementById('textarea__copy').addEventListener('click', () => {
    calcOutput.select();
    calcOutput.setSelectionRange(0, 99999);
    document.execCommand("copy");
  })
}