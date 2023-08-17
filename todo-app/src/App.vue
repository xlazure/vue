<script setup>
import { ref } from "vue"
import TodoForm from './components/todoForm.vue';
import TodoItem from "./components/todoItem.vue";

const newTodo = ref("")
const todosArray = ref([{id:14,name:'testt',isCompleted:true},{id:12,name:'foo',isCompleted:false}])

function addTodo(todo) {
  todosArray.value.push(todo);
  console.log(todo)
}
function removeTodo(todo) {
  todosArray.value = todosArray.value.filter(item => item.id !== todo)
}
function completeTodo(todoId) {
  todosArray.value = todosArray.value.map(item => {
    if (item.id === todoId) {
      item.isCompleted = !item.isCompleted;
    }
    return item;
  });
}

</script>

<template>
  <div class="wrapper">
    <h1>Todo-App Vue!</h1>
    <TodoForm :newTodo="newTodo" @update:newTodo="newTodo = $event" @addTodo="addTodo" />
    <div v-for="(todo, index) in todosArray.slice().reverse()" :key="index">
      <TodoItem :todo="todo" @removeTodo="removeTodo" @completeTodo="completeTodo"/>
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
