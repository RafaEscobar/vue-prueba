<script setup>
</script>

<template>
    <div class="bg-blue-100 w-full p-4">
        <div class="w-1/4 flex justify-between">
            <span class="hover:text-blue-500 text-lg">
                <RouterLink to="counter">Contador</RouterLink>
            </span>
            <span class="hover:text-blue-500 text-lg">
                <RouterLink to="todo-list">TodoList</RouterLink>
            </span>
            <span class="hover:text-blue-500 text-lg">
                <RouterLink to="register">Formulario</RouterLink>
            </span>
        </div>
    </div>
</template>

<style scoped>
</style>