# 4english

Application to learn english.

## Description

---

## Main goal of building this application

The main goal of building this application is to provide simple tool to learn english in effective way. For me it's a challange to gain more experience in React and TypeScript, also learn more about how to deal with API's with Axios.

## Technology

1. React
2. TypeScript
3. Vite

## APIs

1. FREE DICTIONARY API | Get word details | https://dictionaryapi.dev/
2. RANDOM WORD API | Get random english word | https://random-word-api.herokuapp.com/home
3. DEEPL | Translate text | https://www.deepl.com/pl/pro-api?cta=header-pro-api

## User stories

1. Użytkownik rozpoczyna od strony powitalnej, na której może przeczytać o projekcie.
2. Użytkownik może wybrać pomiędzy trybem ciemnym i jasnym. (local storage)
3. Użytkownik widzi zawartość strony w swoim języku lub może ustawić domyślny język angielski. (cookies)(API)
4. Rzeczywista ścieżka użytkownika jest zapisywana, aby zapobiec jej zmianie po odświeżeniu. (ciasteczka)
5. Użytkownik przechodzi do aplikacji po kliknięciu przycisku i pobiera losowe angielskie słowo.
6. Użytkownik może wyszukiwać angielskie słowa.
7. Użytkownik może przeczytać o definicji słów, przykładach...
8. Użytkownik może usłyszeć, jak wypowiedzieć określone słowo.
9. Użytkownik może przetłumaczyć każde słowo.
10. Użytkownik może sprawdzić się w quizie.

## How to install

1. Clone repository to your local destination.
2. Run command: npm install
3. Run command: npm run dev
4. Open your browser on localhost with port that was displayed after previous command.

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
