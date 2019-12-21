var details = document.getElementById('details');

function recalc() {
  const cryptoType = document.getElementById('crypto').querySelector('input:checked').id;
  const params = [calc__input.value, calc__key.value ? calc__key.value : 'КЛЮЧ'];
  const paramsPolyalpha = [calc__input.value, calc__key.value ? +calc__key.value : 3];
  const paramsTranspos = [calc__input.value, calc__key.value ? calc__key.value : '3 8 1 5 2 7 6 4'];
  let value = '';
  switch (cryptoType) {
    case 'crypto__vigenere':
      value = mode.checked ? Vigenere.encrypt(...params) : Vigenere.decrypt(...params);
      break;
    case 'crypto__opened_key':
      value = mode.checked ? OpenedKey.encrypt(...params) : OpenedKey.decrypt(...params);
      break;
    case 'crypto__closed_key':
      value = mode.checked ? ClosedKey.encrypt(...params) : ClosedKey.decrypt(...params);
      break;
    case 'crypto__polyalphabetic':
      value = mode.checked ? Polyalphabetic.encrypt(...paramsPolyalpha) : Polyalphabetic.decrypt(...paramsPolyalpha);
      break;
    case 'crypto__ransposition':
      value = mode.checked ? Transposition.encrypt(...paramsTranspos) : Transposition.decrypt(...paramsTranspos);
      break;
  }
  calc__output.value = value ? value : '';
}

document.body.onload = () => {
  const selectedType = localStorage.getItem('crypto_selected_id');
  const selectedMode = localStorage.getItem('crypto_selected_mode');
  document.getElementById('crypto').querySelectorAll('input').forEach(i => {
    i.onchange = () => {
      recalc();
      localStorage.setItem('crypto_selected_id', i.id);
      switch (i.id) {
        case 'crypto_polyalphabetic':
          calc__key.placeholder = 'Количество алфавитов k (по дефолту k = 3)'; break;
        case 'crypto_transposition':
          calc__key.placeholder = 'Порядок перестановки (по дефолту 3 8 1 5 2 7 6 4)'; break;
        default:
          calc__key.placeholder = `Ключ (по дефолту равно 'КЛЮЧ')`;
      }
    };
  })
  if (selectedType) {
    document.getElementById(selectedType).checked = true;
    document.getElementById(selectedType).onchange();
  }
  if (selectedMode) mode.checked = selectedMode === 'encrypt';
  calc__input.addEventListener('keyup', recalc);
  calc__key.addEventListener('keyup', recalc);
  mode.onchange = () => {
    recalc();
    localStorage.setItem('crypto_selected_mode', mode.checked ? 'encrypt' : 'decrypt');
  };
  mode__decrypt.addEventListener('click', () => {
    mode.checked = false;
    mode.onchange();
  });
  mode__encrypt.addEventListener('click', () => {
    mode.checked = true
    mode.onchange()
  });
  calc__output.addEventListener('keypress', (e) => e.preventDefault());
  textarea__copy.addEventListener('click', () => {
    calc__output.select();
    calc__output.setSelectionRange(0, 99999);
    document.execCommand("copy");
  })
}