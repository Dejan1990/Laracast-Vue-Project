<script setup>
    defineProps({
        modelValue: String
    })

    let emit = defineEmits(['update:modelValue'])

    function onTabPress(e) {
        let t = e.target
        let val = t.value,
            start = t.selectionStart,
            end = t.selectionEnd;

      
        t.value = val.substring(0, start) + "\t" + val.substring(end)
    
        t.selectionStart = t.selectionEnd = start + 1
    }

    function update(e) {
        // this.$emit('update:modelValue', 'fdsfsdafsdafdsf') this.$emit('update:modelValue', e.target.value)  -> option API
        emit('update:modelValue', e.target.value)
    }
</script>

<template>
    <textarea 
        @keydown.tab.prevent="onTabPress"
        @keyup="update"
        v-text="modelValue"
    ></textarea>
</template>

