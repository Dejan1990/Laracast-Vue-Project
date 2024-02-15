<script setup>
    defineProps({
        modelValue: String
    })

    function onTabPress(e) {
        let t = e.target
        let val = t.value,
            start = t.selectionStart,
            end = t.selectionEnd;

      
        t.value = val.substring(0, start) + "\t" + val.substring(end)
    
        t.selectionStart = t.selectionEnd = start + 1
    }
</script>

<template>
    <textarea 
        @keydown.tab.prevent="onTabPress"
        v-text="modelValue"
    ></textarea>
</template>

