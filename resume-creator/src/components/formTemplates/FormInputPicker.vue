<template>
  <Component :inputProps="is" @inputEvent="inputEvent" :category-name="categoryName" />
</template>

<script setup>
import { defineProps } from 'vue'
import { getDynamicComponent } from './inputPicker'
import { resumeFormStore } from '../../stores/resume-form'

const { is, categoryName } = defineProps(['is', 'category-name'])

const Component = getDynamicComponent(is.elementType)

function inputEvent({ key, value }) {
  resumeFormStore.pushDataToCategory(categoryName, key, value)
}
</script>
