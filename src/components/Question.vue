<script setup lang="ts">
import {
  Question,
  Answer,
  AnswersState,
} from '@/data'

interface QuestionProps {
  question: Question
  answer: AnswersState
}

const props = defineProps<QuestionProps>()

const emit = defineEmits([
  'select'
])

function select(value: Answer) {
  emit('select', value)
}

function computeButtonClasses(value: Answer, index: number) {
  const classNames = []
  if (props.answer[props.question.category] === value)
    classNames.push('answer-active')
  if (index === 0)
    classNames.push('answer-left')
  else if (index === props.question.answers.length - 1)
    classNames.push('answer-right')
  else
    classNames.push('answer')
  return classNames.join(' ')
}
</script>

<template>
  <div class="answer-container">
    <h4>{{ question.title }}</h4>
    <div>
      <button
        v-for="(answer, index) in question.answers"
        :key="answer"
        :class="computeButtonClasses(answer, index)"
        @click="select(answer)"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.answer-container {
  margin-bottom: 2rem;
}

.answer {
  background-color: white;
  outline: 0.15rem solid rgb(249, 87, 89);
  border: none;
  padding: 0.75rem;
  width: 12rem;
  color: rgb(27, 60, 138);
  cursor: pointer;
  font: {
    size: 1rem;
    weight: 200;
  }
}

.answer-left {
  @extend .answer;
  border-radius: 1rem 0 0 1rem;
}

.answer-right {
  @extend .answer;
  border-radius: 0 1rem 1rem 0;
}

.answer-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>
