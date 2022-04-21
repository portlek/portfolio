<script setup lang="ts">
import {
  Gender,
  Popularity,
  Length
} from '@/data';

type Buttons = Gender[] | Popularity[] | Length[]
type AnyButton = Gender | Popularity | Length

interface OptionProps {
  option: {
    title: string
    category: string
    buttons: Buttons
  },
  options: {
    gender: Gender
    popularity: Popularity
    length: Length
  },
}

const props = defineProps<OptionProps>()

function computeButtonClasses(value: AnyButton, index: number) {
  const classNames = []
  if (props.options[props.option.category] === value) {
    classNames.push('option-active')
  }
  if (index == 0) {
    classNames.push('option-left')
  } else if (index == props.option.buttons.length - 1) {
    classNames.push('option-right')
  } else {
    classNames.push('option')
  }
  return classNames.join(" ")
}
</script>

<template>
  <div>
    <h4>{{ option.title }}</h4>
    <div>
      <button
        v-for="(value, index) in option.buttons"
        :key="value"
        :class="computeButtonClasses(value, index)"
        @click="options[option.category] = value"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.option {
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

.option-left {
  @extend .option;
  border-radius: 1rem 0 0 1rem;
}

.option-right {
  @extend .option;
  border-radius: 0 1rem 1rem 0;
}

.option-active {
  background-color: rgb(249, 87, 89);
  color: white;
}
</style>
