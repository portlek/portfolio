<script setup lang="ts">
const options = reactive({
  gender: 'Unisex',
  popularity: 'Unique',
  length: 'Short',
})
</script>

<template>
  <div class="container">
    <h1>Portfolio</h1>
    <p>Choose your options and click the "Find Names" buttom below</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button
            class="option-left"
            :class="options.gender === 'Male' && 'option-active'"
          >
            Male
          </button>
          <button class="option" :class="options.gender === 'Unisex' && 'option-active'">
            Unisex
          </button>
          <button
            class="option-right"
            :class="options.gender === 'Female' && 'option-active'"
          >
            Female
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button
            class="option-left"
            :class="options.popularity === 'Trendy' && 'option-active'"
          >
            Trendy
          </button>
          <button 
            class="option-right"
            :class="options.popularity === 'Unique' && 'option-active'"
          >
            Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose the name's length</h4>
        <div class="option-buttons">
          <button
            class="option-left"
            :class="options.length === 'Long' && 'option-active'"
          >
            Long
          </button>
          <button
            class="option"
            :class="options.length === 'All' && 'option-active'"
          >
            All
          </button>
          <button
            class="option-right"
            :class="options.length === 'Short' && 'option-active'"
          >
            Short
          </button>
        </div>
      </div>
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

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  position: relative;
}

.option-container {
  margin-bottom: 2rem;
}

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
