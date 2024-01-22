import axios from 'axios'

const authKey = import.meta.env.DEEPL_API_KEY
const apiUrl = import.meta.env.DEEPL_URL
const userAgent = window.navigator.userAgent

// Dane do wysłania
const data = {
  text: ['Hello, world!'],
  target_lang: 'DE',
}

// Konfiguracja opcji zapytania
const axiosConfig = {
  headers: {
    Authorization: `DeepL-Auth-Key ${authKey}`,
    'User-Agent': userAgent,
    'Content-Type': 'application/json',
  },
}

// Wywołanie zapytania za pomocą axios
function sendRequest() {
  axios
    .post('https://api-free.deepl.com/v2/translate', data, axiosConfig)
    .then((response) => {
      console.log('Response:', response.data)
      // Tutaj możesz obsłużyć odpowiedź od serwera
    })
    .catch((error) => {
      console.error('Error:', error)
      // Tutaj możesz obsługiwać błędy komunikacji
    })
}

export default sendRequest
