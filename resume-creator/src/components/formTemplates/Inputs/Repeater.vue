<template>
  <div>
    <div 
      v-for="(form, index) in resumeFormStore.resumeForm[categoryName].repeater" :key="index">
      <form @change="repeaterEvent" v-if="repeater" v-for="item in subForm" class="container">
        <input type="text" :v-model="form[item.name]" :name="inputProps.name" :placeholder="inputProps.placeholder"  />
        <select v-if="inputProps.isOption" v-model="form[item.name]">
          <option value="">Wybierz</option>
          <option v-for="opt in item.options" :value="opt">{{ opt }}</option>
        </select>
      </form>
      <button>Remove</button>
    </div>
    <button @click="add">Dodaj kolejny</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getCurrentInstance } from 'vue'
import { resumeFormStore } from '../../../stores/resume-form'
const { emit } = getCurrentInstance()
const { inputProps, categoryName } = defineProps(['input-props', 'category-name'])
const subForm = inputProps.subForm
const form = inputProps.subForm.reduce((obj, key) => {
    obj[key.name] = '';
    return obj;
  }, {});
const repeater = ref([]);
const add = () => {
  // console.log(additionalForm)
}

function repeaterEvent(e) {
  console.log(e.target)
  // emit('repeaterEvent', {  })

  // emit('inputEvent', { key: e.target.name, value: e.target.value })
  // emit('repeaterEvent', {  })

}
function inputEventByIndex(e) {
  // emit('inputEventByIndex', { key: e.target.name, value: e.target.value })
  // emit('repeaterEvent', {  })
}
onMounted(() => {
  console.log('ff')
  resumeFormStore.resumeForm[categoryName].repeater.push(form)
})
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
