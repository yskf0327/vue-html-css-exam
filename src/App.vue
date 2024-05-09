<template>
  <header class="l-header">
    <h1>HTML / CSS 確認テスト</h1>
  </header>
  <main class="l-main">
    <div class="l-container">
      <Exam />
    </div>
  </main>
  <footer class="l-footer">
    <small>&copy; Yusuke Fukumoto</small>
  </footer>
</template>

<script>
import Exam from './components/Exam.vue'

export default {
  name: 'App',
  components: {
    Exam,
  },
  data() {
    return {
      userAns: '',
    }
  },
  methods: {
    registerAns(answers) {
      this.userAns = answers;
      console.log(this.userAns);
    }
  }
}
</script>

<style>
/* @acab.reset.css START */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box
}

:where([hidden]:not([hidden='until-found'])) {
  display: none !important
}

/* :where(html) {
  -webkit-text-size-adjust: none;
  color-scheme: dark light;
  tab-size: 2;
  scrollbar-gutter: stable
} */

:where(html:has(dialog:modal[open])) {
  overflow: clip
}

@media (prefers-reduced-motion:no-preference) {
  :where(html:focus-within) {
    scroll-behavior: smooth
  }
}

:where(body) {
  line-height: 1.5;
  font-family: system-ui, sans-serif;
  -webkit-font-smoothing: antialiased
}

:where(button) {
  all: unset
}

:where(input, button, textarea, select) {
  font: inherit;
  color: inherit
}

:where(textarea) {
  resize: vertical;
  resize: block
}

:where(button, label, select, summary, [role='button'], [role='option']) {
  cursor: pointer
}

:where(:disabled) {
  cursor: not-allowed
}

:where(label:has(>input:disabled), label:has(+input:disabled)) {
  cursor: not-allowed
}

:where(a) {
  color: inherit;
  text-underline-offset: .2ex
}

:where(ul, ol) {
  list-style: none
}

:where(img, svg, video, canvas, audio, iframe, embed, object) {
  display: block
}

:where(img, picture, svg, video) {
  max-inline-size: 100%;
  block-size: auto
}

:where(p, h1, h2, h3, h4, h5, h6) {
  overflow-wrap: break-word
}

:where(h1, h2, h3) {
  line-height: calc(1em + 0.5rem);
  /* text-wrap: balance */
}

:where(hr) {
  border: none;
  border-block-start: 1px solid;
  color: inherit;
  block-size: 0;
  overflow: visible
}

:where(dialog) {
  border: none;
  background: none;
  inset: unset;
  max-width: unset;
  max-height: unset
}

:where(dialog:not([open])) {
  display: none !important
}

:where(:focus-visible) {
  outline: 3px solid CanvasText;
  box-shadow: 0 0 0 5px Canvas;
  outline-offset: 1px
}

:where(:focus-visible, :target) {
  scroll-margin-block: 8vh
}

:where(.visually-hidden:not(:focus-within, :active)) {
  clip-path: inset(50%) !important;
  height: 1px !important;
  width: 1px !important;
  overflow: hidden !important;
  position: absolute !important;
  white-space: nowrap !important;
  border: 0 !important
}

/* @acab.reset.css END */


#app {
  --main-color: #1564BF;
  --base-color: #fff;
  --accent-color: #fff;
  --text-color: #333;

  --white: #ffffff;

  --selected-color: #BF1515;
  --answer-color: #2DA661;

  overflow-wrap: anywhere;
  word-break: normal;
  line-break: strict;
}

:where([type=submit], [type=button]) {
  background-color: transparent;
  border: none;
  appearance: none;
  cursor: pointer;
}

.l-header {
  padding-block: 1rem;
  text-align: center;
}

.l-main {
  margin-block: 3rem;
}

.l-footer {
  padding-block: 1rem;
  text-align: center;
}

.l-container {
  width: clamp(350px, 50.704px + 79.812vw, 1200px);
  margin-inline: auto;
}

.l-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.c-button {
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
}

.c-button-primary {
  background-color: var(--main-color);
  color: var(--white);
}

.c-button-secondary {
  background-color: var(--text-color);
  color: var(--white);
}
</style>
