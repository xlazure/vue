<template>
  <textarea :placeholder="inputProps.placeholder" :name="inputProps.name" @input="inputEvent" />
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { emit } = getCurrentInstance()
const { inputProps, categoryName } = defineProps(['input-props', 'category-name'])

function inputEvent(e) {
  emit('inputEvent', { key: e.target.name, value: e.target.value })
}
</script>
