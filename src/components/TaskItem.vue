<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

defineProps({
  task: Object
});

const store         = useStore();
const editTaskFlag  = ref(false);

const editTask = () => {
  editTaskFlag.value = true;
}
const saveTask = (task) => {
  editTaskFlag.value = false;

  store.commit('UPDATE_TASK', task);
}
const deleteTask = (id) => {
  store.commit('DELETE_TASK', id);
}
const changeTaskStatus = (id, completed) => {
  store.commit('CHANGE_TASK_STATUS', { id, completed });
}
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="form-check">
        <input type="checkbox" class="form-check-input" :id="'chk' + task.id" @change="changeTaskStatus(task.id, !task.completed)">
        <label class="form-check-label" :for="'chk' + task.id">
          <input type="text" class="form-control form-control-sm" v-model="task.description" @keyup.enter="saveTask(task)" v-if="editTaskFlag">
          <span v-else>
            {{ task.description }}
          </span>
        </label>
        <span class="badge bg-success px-1" v-if="task.completed">completed</span>
        <span class="badge bg-danger px-1" v-else>pending</span>
      </div>

      <div class="d-flex gap-1 ms-2">
        <button type="button" class="btn btn-warning btn-sm" @click="editTask" v-if="!editTaskFlag"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-success btn-sm" @click="saveTask(task)" v-else><i class="fas fa-save"></i></button>
        <button type="button" class="btn btn-danger btn-sm" @click="deleteTask(task.id)"><i class="fa fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>