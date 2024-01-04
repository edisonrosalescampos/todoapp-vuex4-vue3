<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import TaskForm from "./components/TaskForm.vue";
import TaskList from "./components/TaskList.vue";

const store = useStore();
const tasks = computed(() => store.state.tasks);
</script>

<template>
  <div class="task-tracker container my-3">
    <h1 class="title">TODO APP</h1>

    <TaskForm />

    <TaskList :tasks="tasks" />
  </div>  
</template>