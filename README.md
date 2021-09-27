<div align="center">

# :tv: rajeo

A modern, theme aware video player for html videos.

[![License](https://badgen.net/github/license/Rajaniraiyn/rajeo)](LICENSE) [![Release](https://badgen.net/npm/v/rajeo)](../../releases/latest) [![Gitter](https://badges.gitter.im/rajeo/community.svg)](https://gitter.im/rajeo/community) [![Gitter Members](https://badgen.net/gitter/members/rajeo/community)](https://gitter.im/rajeo/community) ![Checks](https://badgen.net/github/checks/Rajaniraiyn/rajeo) [![Stars](https://badgen.net/github/stars/Rajaniraiyn/rajeo)](../../stargazers) [![Forks](https://badgen.net/github/forks/Rajaniraiyn/rajeo)](../../network/members) [![Opened Issues](https://badgen.net/github/open-issues/Rajaniraiyn/rajeo)](../../issues?q=is%3Aopen) [![CodeQL](https://github.com/Rajaniraiyn/rajeo/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/Rajaniraiyn/rajeo/actions/workflows/codeql-analysis.yml)

---

|                              TABLE OF CONTENTS                              |
| :-------------------------------------------------------------------------: |
|                      [:thinking: How?](#thinking-how)                       |
|                    [:roll_eyes: What?](#roll_eyes-what)                     |
|              [:raised_hands: Features](#raised_hands-features)              |
|                        [:scroll: Plan](#scroll-plan)                        |
| [:man_technologist: Local Development](#man_technologist-local-development) |
|             [:handshake: Contributors](#handshake-contributors)             |
|                    [:tickets: License](#tickets-license)                    |

</div>

## :thinking: How?

1. Add below script tag in your html containing valid video tag

```html
<script src="http://unpkg.com/rajeo@latest" defer></script>
```

*OR*  Add the below script tag in your html containing valid video tag

```html
<script type="module">
  import * as rajeo from "https://unpkg.com/rajeo@latest";
  window.onload = rajeo;
</script>
```

*OR*  Add the following in your ES6 and call `rajeo()` separately but the html must have a valid video tag

```javascript
import * as rajeo from "https://unpkg.com/rajeo@latest";
```

2. Thats it, the script itself takes care of others (i.e. It converts the normal video tag to rajeo)

## :roll_eyes: What?

|                                              Before _adding script_                                              |
| :--------------------------------------------------------------------------------------------------------------: |
| ![Before](https://user-images.githubusercontent.com/72294760/134794946-58be8c2b-5a01-41f2-85f1-e69cea370a41.png) |

|                                              After _adding script_                                              |
| :-------------------------------------------------------------------------------------------------------------: |
| ![After](https://user-images.githubusercontent.com/72294760/134794916-bb91d9dc-24d1-4200-ac27-14566acac228.png) |

## :raised_hands: Features

- Modern
- Beautiful
- Load Progress (Buffer Progress)
- PiP (Picture-in-Picture) Mode
- Fullscreen
- Top title bar with icon
- Theme aware
- Cross platform
- Mobile friendly
- Responsive
- Zero dependencies
- CSS first approach

## :scroll: Plan

- Keyboard shortcuts
- Playback rate
- Volume
- Support popular streaming services
- Gestures
- Piracy protection
- React component
- Custom events
- Custom video parser
- Port to web assembly (aka wasm) and web worker

## :man_technologist: Local Development

To clone and build packages of this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your device. Copy and paste the following in your command line:

```sh
git clone https://github.com/Rajaniraiyn/rajeo.git

cd rajeo

npm install

npm run build
```

Then check the dist folder you will see dist folder with following structure

```sh
dist/
├─ cjs/
│  ├─ index.js
│  ├─ index.js.map
│  ├─ index.min.js
│  ├─ index.min.js.map
├─ esm/
│  ├─ index.js
│  ├─ index.js.map
│  ├─ index.min.js
│  ├─ index.min.js.map
├─ umd/
│  ├─ index.js
│  ├─ index.js.map
│  ├─ index.min.js
│  ├─ index.min.js.map
├─ style.css
├─ style.css.map
```

## :handshake: Contributors

[![contributors](https://contrib.rocks/image?repo=rajaniraiyn/rajeo)](https://github.com/rajaniraiyn/rajeo/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).

## :tickets: License

[MIT](LICENSE)

<div align="center">
  
---

**Made with :heart: by _Rajaniraiyn_**

**[`^ back to top ^`](#)**

</div>
