<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref, onMounted } from 'vue'

onMounted(() => {
  alert("Hello from HomeView")
})

setTimeout(() => {
  message.value = 'This is new message'
}, 2000)

let message = ref("Hello world")



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
  </main>
</template>
