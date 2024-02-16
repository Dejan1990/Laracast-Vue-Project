<script setup>
import {useFlash} from '@/composables/useFlash';
import {useCounterStore} from '@/stores/CounterStore'

let counter = useCounterStore();
let { flash } = useFlash();
</script>
<template>
  <div>
    <p>
      <button @click="flash('About Page Test', 'It works on the About page!!!', 'info')">Flash</button>
    </p>
    <br><br>
    <p>
      About page. The current count is: {{ counter.count }}
    </p>
  </div>
</template>


