import { createStore } from "vuex";

export default createStore({
    state() {
        return { 
            tasks: []
        }
    },
    mutations: {
        ADD_TASK (state, newTask) {
            state.tasks.unshift(newTask);
        },
        UPDATE_TASK (state, payload) {
            const index = state.tasks.findIndex(item => item.id === payload.id);

            if (index !== -1) 
            {
                state.tasks[index].description = payload.description;
            }
        },
        DELETE_TASK (state, id) {
            state.tasks = state.tasks.filter(item => item.id !== id);
        },
        CHANGE_TASK_STATUS (state, payload) {
            state.tasks = state.tasks.map(item => {
                if (item.id === payload.id) 
                {
                    item.completed = !payload.completed;
                }

                return item;
            });
        }
    }
});