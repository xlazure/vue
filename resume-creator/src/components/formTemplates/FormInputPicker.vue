<template>
  <Component :inputProps="is" @inputEventByIndex="inputEventByIndex" @inputEvent="inputEvent" @repeaterEvent="repeaterEvent" :category-name="categoryName"  />
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { defineProps } from 'vue'
import { getDynamicComponent } from './inputPicker'
import { resumeFormStore } from '../../stores/resume-form'

const { is, categoryName,isRepeat} = defineProps(['is', 'category-name','is-repeat'])

const Component = defineAsyncComponent(() =>
  Promise.resolve(getDynamicComponent(is.elementType))
);


function repeaterEvent({ value }) {
  resumeFormStore.pushReapterToCategory(categoryName, value)
}
function inputEvent({ key, value }) {
  resumeFormStore.pushDataToCategory(categoryName, key, value)
}
function inputEventByIndex({ key, value }) {
  resumeFormStore.pushDataToCategoryByIndex(categoryName, key, value)
}
</script>
