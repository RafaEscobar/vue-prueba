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
 <div>
    <h1>Lista de tareas</h1>
    <input type="text" name="inputTask" id="inputTask"
      v-model="newTask" @keyup.enter="addTask"><br>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="deleteTask">Eliminar</button>
      </li>
    </ul>
 </div>
</template>

<style scoped>
</style>