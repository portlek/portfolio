<script setup lang="ts">
import {
  Gender,
  Length,
  Popularity,
  names,
  AnswersState,
  questions,
} from '@/data'

const selectedNames = ref<string[]>([
])

const answers = reactive<AnswersState>({
  gender: Gender.UNISEX,
  popularity: Popularity.TRENDY,
  length: Length.LONG,
})

function computeSelectedNames() {
  selectedNames.value = names
    .filter(s => s.gender === answers.gender)
    .filter(s => s.popularity === answers.popularity)
    .filter(s => answers.length === Length.ALL || s.length === answers.length)
    .map(s => s.name)
}

function removeName(index: number) {
  const fileteredNames = [...selectedNames.value]
  fileteredNames.splice(index, 1)
  selectedNames.value = fileteredNames
}
</script>

<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the "Find Names" buttom below</p>
    <div class="question-container">
      <Question
        v-for="question in questions"
        :key="question.title"
        :question="question"
        :answers="answers"
        @select="(answer) => answers[question.category] = answer"
      />
      <button
        class="primary"
        @click="computeSelectedNames"
      >
        Find names
      </button>
    </div>
    <div class="cards-container">
      <CardName
        v-for="(name, index) in selectedNames"
        :key="name"
        :name="name"
        @remove="() => removeName(index)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(81, 119, 206);
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
}

.question-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.primary {
  background-color: rgb(249, 87, 89);
  border-radius: 6.5rem;
  border: none;
  padding: 0.75rem 4rem;
  margin-top: 1rem;
  color: white;
  cursor: pointer;
}

.cards-container {
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
}
</style>
