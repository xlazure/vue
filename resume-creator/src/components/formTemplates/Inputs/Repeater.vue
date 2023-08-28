<template>
  <div>
    <div class="container">
      <input type="text" :name="inputProps.name" :placeholder="inputProps.placeholder"/>
        <select v-if="inputProps.isOption">
          <option value="">Wybierz</option>
        <option v-for="option in inputProps.options">{{ option }}</option>
        </select>
    </div>
    <div v-for="(form, index) in additionalForm" :key="index" class="container">
      {{ form }}
      <input type="text" name="" />
        <select v-if="inputProps.isOption">
          <option value="">Wybierz</option>
        </select>
      <button>Remove</button>
    </div>
    <button @click="add">Dodaj kolejny</button>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const { inputProps, categoryName } = defineProps(['input-props', 'category-name'])
const additionalForm = ref([]);

const add = () => {
  additionalForm.value.push({});
  console.log(additionalForm)
};
</script>

<style scoped>
.container {
  margin-bottom: 1em;
  display: flex;
  gap: 1em;
  
  input,select {
    width: 100%;
  }
}
</style>
  