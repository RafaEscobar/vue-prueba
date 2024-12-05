<script setup>
    import {ref} from "vue";
    const tasks = ref([]);
    const newTask = ref("");
    const addTask = () => {
        tasks.value.push(newTask.value);
        newTask.value = "";
    }
    const deleteTask = (id) => tasks.value.splice(id, 1);
</script>

<template>
 <div class="p-6">
    <h1 class="text-xl">Lista de tareas</h1>
    <input type="text"
      name="inputTask"
      id="inputTask"
      v-model="newTask"
      @keyup.enter="addTask"
      class="border-2 border-blue-200 rounded-lg"><br>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="my-2">
        {{ task }}
        <button @click="deleteTask" 
        class="bg-red-400 rounded-lg px-2">Eliminar</button>
      </li>
    </ul>
 </div>
</template>

<style scoped>
</style>