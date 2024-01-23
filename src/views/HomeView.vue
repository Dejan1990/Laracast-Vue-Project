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
  <main>
    <TheWelcome />
    <p>
      <button @click="flash('It works!!!')">Flash</button>
    </p>
  </main>
</template>
