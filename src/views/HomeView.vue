<script setup>
import {useFlash} from '@/composables/useFlash';

let { flash } = useFlash();
</script>

<template>
  <main>
    <TheWelcome />
    <p>
      <button @click="flash('It works!!!')">Flash</button>
    </p>
  </main>
</template>
