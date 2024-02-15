<script setup>
  import TabbableTextarea from "@/components/TabbableTextarea.vue"
  import { ref } from 'vue'
  
  let comment = ref('Test value');

  setTimeout(() => {
    comment.value = "It works!!!"
  }, 2000);
</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px;" />
    </form>
  </main>
</template>
