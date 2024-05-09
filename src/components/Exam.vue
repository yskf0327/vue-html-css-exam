<template>
  <section class="l-section">
    <article class="c-question" v-for="(question, qindex) in questions" v-bind:key="question.qId"
      v-bind:id="question.qId">
      <div class="c-question__inner">
        <h2 class="c-title02"><span>問{{ qindex + 1 }}.</span> <span>{{ question.qText }}</span></h2>
        <ul class="c-question__list">
          <li class="c-question__item" v-for="(option, cindex) in question.options" v-bind:key="cindex">
            <label v-bind:for="option.cId"><input type="radio" v-bind:name="question.qId" v-bind:id="option.cId"
                v-bind:value="option.cId" v-on:change="checkRadio($event, qindex)">{{
                  option.cText }}</label>
          </li>
        </ul>
      </div>
    </article>
  </section>
  <section class="l-section">
    <p v-html="message" class="c-result-msg"></p>
    <div class="l-button-container">
      <input class="c-button c-button-primary" v-if="!restart" type="button" value="採点する" v-on:click="calc()">
      <a class="c-button c-button-secondary" v-else href="./">再テスト</a>
    </div>
  </section>
</template>

<script>
import questions from '../assets/questions.json';
import answers from '../assets/answers.json';
export default {
  name: 'QuestionItem',
  props: {
    msg: String
  },
  data() {
    return {
      questions: questions,
      answers: answers,
      userAns: {},
      message: '',
      restart: false
    }
  },
  methods: {
    checkRadio(e, qindex) {
      console.log(e.target.name + ':' + e.target.value);
      console.log(this.questions[qindex]);
      console.log(this.answers[e.target.name]);
      if (this.answers[e.target.name] === e.target.value) {
        this.questions[qindex].isCorrect = true;
      } else {
        this.questions[qindex].isCorrect = false;
      }
      console.log(this.questions[qindex].isCorrect);
    },
    calc() {
      let questionData = JSON.parse(JSON.stringify(this.questions));
      console.log(questionData);
      let totalNum = questionData.length;
      let ansCnt = 0;
      for (let questionItem of questionData) {
        console.log(questionItem.isCorrect);
        if (questionItem.isCorrect) {
          ansCnt++;
        }
      }
      // let correctNum = questionData
      this.message = totalNum + '問中<span class="c-result-num">' + ansCnt + '</span>問正解です。';
      this.checkAns();
      this.checkSelect();
      this.restart = true;
    },
    checkAns() {
      for (let ans in answers) {
        let target = document.querySelector('#' + ans + ' [for=' + answers[ans] + ']');
        target.classList.add('u-answer');
      }
      // console.log(JSON.parse(JSON.stringify(this.answers)));
    },
    checkSelect() {
      let selectArray = document.querySelectorAll('input:checked');
      for (let target of selectArray) {
        target.parentElement.classList.add('u-select');
      }
      console.log(selectArray);
    }
  },
  created() {
    // console.log(data);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

input[type=radio] {
  margin-inline-end: 0.3rem;
}

.l-section+.l-section {
  margin-block-start: 2rem;
}

.c-title02 {
  font-size: 1.2rem;
  display: flex;
  gap: 0.3em;
}

.c-title02 *:nth-child(1) {
  flex-shrink: 0;
}

/* .c-title02 *:last-child {
  flex-shrink: 0;
} */

.c-title02+* {
  margin-block-start: 1.2rem;
}

.c-question+.c-question {
  margin-block-start: 3rem;
}

.c-question__item:not(:nth-of-type(1)) {
  margin-block-start: 0.3rem;
}

.u-select {
  text-decoration: underline;
  color: var(--selected-color);
  font-size: 1.2em;
}

.u-answer {
  font-weight: bold;
  color: var(--answer-color);
  font-size: 1.2em;
}

h2::after {
  flex-shrink: 0;
  align-self: center;
  display: inline-block;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  margin-inline-start: 0.5rem;
}

.c-question:has(.u-select.u-answer) h2::after {
  font: var(--fa-font-solid);
  content: '\f058';
  color: var(--answer-color);
  font-size: 1.8rem;
}

.c-question:has(.u-select) h2::after,
.c-question:has(.u-answer) h2::after {
  font: var(--fa-font-solid);
  content: '\f057';
  color: var(--selected-color);
  font-size: 1.8rem;
}

.c-result-msg {
  font-size: 1.5rem;
  text-align: center;
  font-weight: bold;
  color: var(--answer-color);
  text-decoration: underline;
}

.c-result-msg+*{
  margin-block-start: 2rem;
}
</style>
