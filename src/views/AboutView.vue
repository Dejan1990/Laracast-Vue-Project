<script>
export default {
    methods: {
      flash(message) {
        alert(message)
      }
    },
}
</script>
<template>
  <div class="about">
    <p>
      <button @click="flash('It works on the About page!!!')">Flash</button>
    </p>
  </div>
</template>


