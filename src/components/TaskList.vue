<script setup>
import TaskItem from './TaskItem.vue';

defineProps({
    tasks: Array
});
</script>

<template>
    <div v-if="tasks.length === 0"><p class="text-white text-center">No tasks to show</p></div>
    <div class="task-list" v-else>
        <h6 class="title">TODO LIST</h6>
        <TaskItem v-for="(task, index) in tasks" :task="task" :key="task.id" />
    </div>
</template>