# next-prism

A lightweight, robust, and elegant syntax highlighting component for your next React apps.

## 🎁 Features

* Themes
* Languages

## 🔧 Install

next-prism is available on npm. It can be installed with the following command:

```js
npm install next-prism --save
```

next-prism is available on yarn as well. It can be installed with the following command:

```js
yarn add next-prism
```

## 💡 Usage

```javascript
import { usePrism } from 'next-prism'

// Import a theme
import 'next-prism/themes/twilight.css'

export default function Home() {
  const { Code } = usePrism()

  return (
    <>
      <Code language='javascript'>
      {`<div className="example">
  {Math.random()}
</div>`}
      </Code>
    </>
  )
}
```

## Props

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Require</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>children</td>
      <td></td>
      <td></td>
      <td>❌</td>
      <td></td>
    </tr>
    <tr>
      <td>code</td>
      <td>string</td>
      <td></td>
      <td>❌</td>
      <td></td>
    </tr>
    <tr>
      <td>language</td>
      <td>string</td>
      <td></td>
      <td>❌</td>
      <td></td>
    </tr>
  </tbody>
</table>

## 📜 Changelog

Latest version 0.1.0 (2022-12-08):

  * Add themes and languages

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/next-prism/blob/master/CHANGELOG.md).

## ❗ Issues

If you think any of the `next-prism` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 🌟 Contribution

We'd love to have your helping hand on contributions to `next-prism` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 👨‍👩‍👦 Advertisement

You maybe interested.

* [React Patterns](https://github.com/reactpatterns/reactpatterns) – React patterns & techniques to use in development for React Developer.
* [React Papaparse](https://github.com/Bunlong/react-papaparse) – The fastest in-browser CSV (or delimited text) parser for React.
* [Next Share](https://github.com/Bunlong/next-share) – Social media share buttons for your next React apps.
* [Next Time Ago](https://github.com/Bunlong/next-time-ago) – A lightweight tiny time-ago component for your next React apps.

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
