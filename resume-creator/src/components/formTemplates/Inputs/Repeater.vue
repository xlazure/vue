<template>
  <div>
    <div class="container">
      <input
        type="text"
        :name="inputProps.name"
        :placeholder="inputProps.placeholder"
        @input="inputEvent"
      />
      <select v-if="inputProps.isOption">
        <option value="">Wybierz</option>
        <option v-for="val in inputProps.options" :value="val">{{ val }}</option>
      </select>
    </div>
    <div
      v-if="resumeFormStore.resumeForm[categoryName]"
      v-for="(form, index) in resumeFormStore.resumeForm[categoryName].data"
      :key="index"
      class="container"
    >
      <input
        type="text"
        :name="inputProps.name + index"
        :placeholder="inputProps.placeholder"
        @input="inputEvent"
      />
      <select v-if="inputProps.isOption">
        <option value="">Wybierz</option>
        <option v-for="val in inputProps.options" :value="val">{{ val }}</option>
      </select>
      <button>Remove</button>
    </div>
    <button @click="add">Dodaj kolejny</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'
import { resumeFormStore } from '../../../stores/resume-form'
const { emit } = getCurrentInstance()
const { inputProps, categoryName } = defineProps(['input-props', 'category-name'])

// const add = () => {
//   additionalForm.value.push({})
//   console.log(additionalForm)
// }

function inputEvent(e) {
  emit('inputEvent', { key: e.target.name, value: e.target.value })
}
</script>

<style scoped>
.container {
  margin-bottom: 1em;
  display: flex;
  gap: 1em;

  input,
  select {
    width: 100%;
  }
}
</style>
