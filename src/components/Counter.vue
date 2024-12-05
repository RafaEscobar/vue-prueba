<script setup>
    import { ref } from "vue";
    const counter = ref(0);
    const plus = () => counter.value++;
    const minus = () => (counter.value == 0) ?
        alert("Ho puedes dar más dislikes") : 
        counter.value--;
</script>

<template>
    <h1>Likes: {{ counter }}</h1> <br>
    <p><button @click="plus">Like</button></p>
    <p><button @click="minus">Dislike</button></p>
</template>

<style scoped>
</style>