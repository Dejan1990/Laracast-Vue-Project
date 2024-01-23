<script>
import flash from '@/mixins/flash';

export default {
  mixins: [flash]
}
</script>
<template>
  <div class="about">
    <p>
      <button @click="flash('It works on the About page!!!')">Flash</button>
    </p>
  </div>
</template>


