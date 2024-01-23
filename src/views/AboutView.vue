<script setup>
import {useFlash} from '@/composables/useFlash';

let { flash } = useFlash();
</script>
<template>
  <div class="about">
    <p>
      <button @click="flash('It works on the About page!!!')">Flash</button>
    </p>
  </div>
</template>


