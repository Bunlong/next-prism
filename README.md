# next-prism

A lightweight, robust, and elegant syntax highlighting component for your next React apps.

[![NPM](https://img.shields.io/npm/v/next-prism.svg)](https://www.npmjs.com/package/next-prism) ![npm bundle size](https://img.shields.io/bundlephobia/min/next-prism) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

// Import a theme.css
import 'next-prism/themes/twilight.css'

export default function App() {
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
      <td>children || content</td>
      <td>ReactNode</td>
      <td></td>
      <td>❌</td>
      <td>The content code</td>
    </tr>
    <tr>
      <td>language</td>
      <td>string</td>
      <td></td>
      <td>❌</td>
      <td>The supported language</td>
    </tr>
  </tbody>
</table>

## Themes

  * coy
  * dark
  * funky
  * okaidia
  * prism
  * solarizedlight
  * tomorrow
  * twilight

## Languages

<table>
  <tr>
    <td>Markup - <code>markup</code>, <code>html</code>, <code>xml</code>, <code>svg</code>, <code>mathml</code>, <code>ssml</code>, <code>atom</code>, <code>rss</code></td>
    <td>CSS - <code>css</code></td>
  </tr>
  <tr>
    <td>JavaScript - <code>javascript</code>, <code>js</code></td>
    <td>C-like - <code>clike</code></td>
  </tr>
  <tr>
    <td>ABAP - <code>abap</code></td>
    <td>ABNF - <code>abnf</code></td>
  </tr>
  <tr>
    <td>ActionScript - <code>actionscript</code></td>
    <td>Ada - <code>ada</code></td>
  </tr>
  <tr>
    <td>Agda - <code>agda</code></td>
    <td>AL - <code>al</code></td>
  </tr>
  <tr>
    <td>ANTLR4 - <code>antlr4</code>, <code>g4</code></td>
    <td>Apache Configuration - <code>apacheconf</code></td>
  </tr>
  <tr>
    <td>Apex - <code>apex</code></td>
    <td>APL - <code>apl</code></td>
  </tr>
  <tr>
    <td>AppleScript - <code>applescript</code></td>
    <td>AQL - <code>aql</code></td>
  </tr>
  <tr>
    <td>Arduino - <code>arduino</code>, <code>ino</code></td>
    <td>ARFF - <code>arff</code></td>
  </tr>
  <tr>
    <td>ARM Assembly - <code>armasm, arm-asm</code></td>
    <td>Arturo - <code>arturo</code>, <code>art</code></td>
  </tr>
  <tr>
    <td>AsciiDoc - <code>asciidoc</code>, <code>adoc</code></td>
    <td>ASP.NET (C#) - <code>aspnet</code></td>
  </tr>
  <tr>
    <td>6502 Assembly - <code>asm6502</code></td>
    <td>Atmel AVR Assembly - <code>asmatmel</code></td>
  </tr>
  <tr>
    <td>AutoHotkey - <code>autohotkey</code></td>
    <td>AutoIt - <code>autoit</code></td>
  </tr>
  <tr>
    <td>AviSynth - <code>avisynth</code>, <code>avs</code></td>
    <td>Avro IDL - <code>avro-idl</code>, <code>avdl</code></td>
  </tr>
  <tr>
    <td>AWK - <code>awk</code>, <code>gawk</code></td>
    <td>Bash - <code>bash</code>, <code>sh</code>, <code>shell</code></td>
  </tr>
  <tr>
    <td>BASIC - <code>basic</code></td>
    <td>Batch - <code>batch</code></td>
  </tr>
  <tr>
    <td>BBcode - <code>bbcode</code>, <code>shortcode</code></td>
    <td>BBj - <code>bbj</code></td>
  </tr>
  <tr>
    <td>Bicep - <code>bicep</code></td>
    <td>Birb - <code>birb</code></td>
  </tr>
  <tr>
    <td>Bison - <code>bison</code></td>
    <td>BNF - <code>bnf</code>, <code>rbnf</code></td>
  </tr>
  <tr>
    <td>BQN - <code>bqn</code></td>
    <td>Brainfuck - <code>brainfuck</code></td>
  </tr>
  <tr>
    <td>BrightScript - <code>brightscript</code></td>
    <td>Bro - <code>bro</code></td>
  </tr>
  <tr>
    <td>BSL (1C:Enterprise) - <code>bsl</code>, <code>oscript</code></td>
    <td></td>
  </tr>
<table>

## 📜 Changelog

Latest version 0.1.0 (2022-12-09):

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
    <td align="center">profile
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
* [Next QRCode](https://github.com/bunlong/next-qrcode) – React hooks for generating QR code for your next React apps.
* [Next Share](https://github.com/Bunlong/next-share) – Social media share buttons for your next React apps.
* [Next Time Ago](https://github.com/Bunlong/next-time-ago) – A lightweight tiny time-ago component for your next React apps.

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
