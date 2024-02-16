<template>
    <h1>{{ name }}</h1>
    <QuizHeader />
    <QuizQuestion />
    <QuizFooter />
</template>

<script setup>
    import QuizHeader from '@/components/Quiz/QuizHeader.vue';
    import QuizQuestion from '@/components/Quiz/QuizQuestion.vue';
    import QuizFooter from '@/components/Quiz/QuizFooter.vue';
    import {provide, ref} from 'vue'

    // defineProps({quiz: Object});

    let name = ref('Jane Doe')

    provide('name', {
        name,  // because the key and the value are the same name: name
        changeName: () => name.value = 'Changed'
    });
</script>