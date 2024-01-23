<script>
import swal from 'sweetalert';

export default {
    methods: {
      flash(message) {
        swal('Success!', message, 'success')
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


