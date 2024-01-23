<script setup>
import {useFlash} from '@/composables/useFlash';

let { flash } = useFlash();
</script>
<template>
  <div class="about">
    <p>
      <button @click="flash('About Page Test', 'It works on the About page!!!', 'info')">Flash</button>
    </p>
  </div>
</template>


