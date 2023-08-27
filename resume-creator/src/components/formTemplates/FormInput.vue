<template>
  <div v-if="inputProps.elementType === 'repeater'">
    <FormLayout :layout="[2]" :subForm="inputProps.subForm">
      <template #default="{item}">
          <select v-if="item.elementType === 'selector'" :type="item.elementType" :name="item.name" :placeholder="item.placeholder" @input="inputEvent">
            <option v-for="value in item.options" :value="value">{{value}}</option>
          </select>
          <input v-else :type="item.elementType" :name="item.name" :placeholder="item.placeholder" @input="inputEvent"/>
      </template>
    </FormLayout >
    <input type="button" :value="'Dodaj ' + inputProps.placeholder" @click="addForm">
  </div>
  <div v-else-if="inputProps.elementType === 'textarea'">
    <textarea :type="inputProps.elementType" :name="inputProps.name" :placeholder="inputProps.placeholder" @input="inputEvent"/>
  </div>
  <div v-else>
    <input :type="inputProps.elementType" :name="inputProps.name" :placeholder="inputProps.placeholder" @input="inputEvent"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import FormLayout from './FormLayout.vue'
const { inputProps, categoryName } = defineProps(['inputProps','categoryName'])
const formCounter = ref(0);
function addForm() {
  console.log('add form')
}

function inputEvent(e) {
  console.log(categoryName)
  console.log(e.target.name,'-',e.target.value)
}

</script>

<style lang="scss" scoped>
input,select,textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
}

textarea {
  resize: vertical;
}
</style>
