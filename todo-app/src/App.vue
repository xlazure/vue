<script setup>
import { ref, onMounted, watch } from "vue"
import TodoForm from './components/todoForm.vue';
import TodoItem from "./components/todoItem.vue";

const newTodo = ref("")
const isLoading = ref(true)
const todosArray = ref([])

function localStorageUpdate() {
  window.localStorage.setItem('todos',JSON.stringify([todosArray.value]))
}

function addTodo(todo) {
  todosArray.value = [...todosArray.value, todo]
  
}
function removeTodo(todoId) {
  todosArray.value = todosArray.value.filter(item => item.id !== todoId)
}
function completeTodo(todoId) {
  todosArray.value = todosArray.value.map(item => {
    if (item.id === todoId) {
      item.isCompleted = !item.isCompleted;
    }
    return item;
  });
}
function updateTodo(todoId, newTitle) {
  const todoIndex = todosArray.value.findIndex(todo => todo.id === todoId);
  if (todoIndex !== -1) {
    todosArray.value[todoIndex].title = newTitle;
    localStorageUpdate()
  }
}

watch(todosArray, () => {
  localStorageUpdate()
})

onMounted(()=>{

  const starterTodos = [{id:14,title:'Hello World!',isCompleted:false},{id:12,title:'Todo app + local storage',isCompleted:false}]

  const todosLocalStorage = JSON.parse(window.localStorage.getItem('todos'))
  console.log(todosLocalStorage)

  if(todosLocalStorage) {
    todosArray.value = todosLocalStorage[0]
    setTimeout(()=>{
      isLoading.value = !isLoading.value
    },500)

  } else {
    todosArray.value = starterTodos
    //imitation of downloading data from db
    setTimeout(()=>{
      isLoading.value = !isLoading.value
    },500)

    window.localStorage.setItem('todos',JSON.stringify([starterTodos]))
  }
})

</script>

<template>
  <div class="wrapper">
    <h1>Todo-App Vue!</h1>
    <TodoForm :newTodo="newTodo" @update:newTodo="newTodo = $event" @addTodo="addTodo" />
    <div v-if="isLoading">Loading...</div>
    <div v-else v-for="(todo, index) in todosArray.slice().reverse()" :key="index">
      <TodoItem :todo="todo" @removeTodo="removeTodo" @completeTodo="completeTodo" @updateTodo="updateTodo"/>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-bottom:1.25em;
  font-size:2.25rem;
}
  .wrapper {

    max-width: 768px;
    margin: 1.25em auto;
  }
</style>
