<script setup>
    import {useCounterStore} from '@/stores/CounterStore';

    let counter = useCounterStore();
</script>

<template>
    <div>
        <h1>{{ counter.count }}</h1>

        <!-- <p v-show="counter.message.length">{{ counter.message }}</p> -->
        <p>{{ counter.message }}</p>

        <button @click="counter.count++">Increment</button> 
    </div>
</template>