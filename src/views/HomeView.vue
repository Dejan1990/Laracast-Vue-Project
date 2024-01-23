<script setup>
import { ref } from 'vue';

let food = ref('');

function write() {
  localStorage.setItem('food', food.value)
}
</script>

<template>
  <main>
    <TheWelcome />
    <p>
      What's your favorite food? <input type="text" v-model="food" @input="write">
    </p>
  </main>
</template>
