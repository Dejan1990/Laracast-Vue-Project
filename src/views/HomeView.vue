<script setup>
  import { ref } from 'vue'

  let textarea = ref(null)

  
  function onKeyDown(e) {
    // we can get rid of the addEventListener, because we're already doing that at the point we call this function
    let t = textarea.value
    // tab was pressed
    if (e.keyCode === 9) {
      // get caret position/selection
      let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      t.value = val.substring(0, start) + "\t" + val.substring(end)

      // put caret at right position again
      t.selectionStart = t.selectionEnd = start + 1

      e.preventDefault();
    }
  }
  
</script>

<template>
  <main>
    <form>
      <textarea ref="textarea" @keydown="onKeyDown" style="width: 100%; height: 300px;">Hi there</textarea>
    </form>
  </main>
</template>
