<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'

let message = ref("Hello world")

let doSomething = () => {
  alert("doing now!!!")
}

// export default {
//   components: { TheWelcome },

//   data() {
//     return {
//       message: "Hello world"
//     }
//   },

//   mounted() {
//     alert("I have been mounted.")
//   },
// }
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <p>
      <button @click="doSomething">Click me</button>  
    </p>
  </main>
</template>
