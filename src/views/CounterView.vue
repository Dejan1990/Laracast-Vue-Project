<script setup>
    import {counter} from '@/stores/counterStore'
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>

        <p v-show="counter.message.length">{{ counter.message }}</p>

        <button @click="counter.increment()">Increment</button>
    </div>
</template>