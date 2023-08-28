<template>
  <div v-if="inputProps.elementType === 'repeater'">
    <FormLayout :layout="[2]" :subForm="inputProps.subForm">
      <template #default="{ item }">
        <select v-if="item.elementType === 'selector'" :type="item.elementType" :name="item.name"
          :placeholder="item.placeholder" @input="inputEvent">
          <option value="">Wybierz</option>
          <option v-for="value in item.options" :value="value">{{ value }}</option>
        </select>
        <input v-else :type="item.elementType" :name="item.name" :placeholder="item.placeholder" @input="inputEvent" />
      </template>
    </FormLayout>
    <input type="button" :value="'Dodaj ' + inputProps.placeholder" @click="addForm">
  </div>
  <div v-else-if="inputProps.elementType === 'textarea'">
    <textarea :type="inputProps.elementType" :name="inputProps.name" :placeholder="inputProps.placeholder"
      @input="inputEvent" />
  </div>
  <div v-else>
    <input v-if="inputProps.elementType === 'button'" :type="inputProps.elementType" :name="inputProps.name" :value="inputProps.placeholder" @click="clickEvent"
    />
    <input v-else :type="inputProps.elementType" :name="inputProps.name" :placeholder="inputProps.placeholder" :value="getInputValue(inputProps.name)"
      @input="inputEvent" />
  </div>
</template>

<script setup>
import { onUpdated, ref } from 'vue';
import FormLayout from './FormLayout.vue'
import { resumeFormStore } from '../../stores/resume-form'
const { inputProps, categoryName } = defineProps(['inputProps', 'categoryName'])
function addForm() {
  console.log('add form')
}

function inputEvent(e) {
  resumeFormStore.pushDataToCategory(categoryName,e.target.name,e.target.value)
}

function clickEvent(e) {
  console.log(e.target.value)
  
}
function getInputValue(key) {
  if(key === 'zdjecie') return;
  if (
    resumeFormStore.resumeForm[categoryName] &&
    resumeFormStore.resumeForm[categoryName].data &&
    resumeFormStore.resumeForm[categoryName].data[key]
  ) {
    return resumeFormStore.resumeForm[categoryName].data[key];
  }
  return "";
}

getInputValue('imie')

onUpdated(()=>{

})

</script>

<style lang="scss" scoped>
input,
select,
textarea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
}

textarea {
  resize: vertical;
}
</style>
