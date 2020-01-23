const defaults = {
  'vigenere': {
    key: 'КЛЮЧ',
    placeholder: `Ключ (по дефолту равно 'КЛЮЧ')`
  },
  'opened_key': {
    key: 'КЛЮЧ',
    placeholder: `Ключ (по дефолту равно 'КЛЮЧ')`
  },
  'closed_key': {
    key: 'КЛЮЧ',
    placeholder: `Ключ (по дефолту равно 'КЛЮЧ')`
  },
  'polyalphabetic': {
    key: 3,
    placeholder: 'Количество алфавитов k (по дефолту k = 3)'
  },
  'transposition': {
    key: [3, 8, 1, 5, 2, 7, 6, 4],
    placeholder: 'Порядок перестановки (по дефолту 3 8 1 5 2 7 6 4)'
  } 
}

const details = document.getElementById('details');

export {defaults, details};