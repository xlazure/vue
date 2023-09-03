<template>
    <select :name="inputProps.placeholder" @change="inputEvent">
        <option value="">Wybierz</option>
        <option v-for="val in inputProps.options" :value="val">{{ val }}</option>
    </select>
</template>

<script setup>
const { inputProps, categoryName } = defineProps(['input-props', 'category-name']);

import { getCurrentInstance } from 'vue'
const { emit } = getCurrentInstance()

function inputEvent(e) {
  emit('inputEvent', { key: e.target.name, value: e.target.value })
}
</script>