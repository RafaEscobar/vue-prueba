<script setup>
    import { ref } from "vue";
    const counter = ref(0);
    const plus = () => counter.value++;
    const minus = () => (counter.value == 0) ?
        alert("Ho puedes dar más dislikes") : 
        counter.value--;
</script>

<template>
    <div class="p-6">
        <h1>Likes: {{ counter }}</h1> <br>
        <div class="w-40 flex justify-between">
            <button @click="plus" class="bg-blue-400 text-white rounded-lg px-4 py-1">Like</button>
            <button @click="minus" class="bg-red-400 rounded-lg px-4 py-1">Dislike</button>
        </div>
    </div>
</template>

<style scoped>
</style>