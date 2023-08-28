<template>
  <Component :inputProps="is" @inputEvent="inputEvent"/>
</template>

<script setup>
import { defineProps } from 'vue';
import { getDynamicComponent } from './inputPicker';

const { is } = defineProps(['is']);

const Component = getDynamicComponent(is.elementType);

function inputEvent (e) {
  resumeFormStore.pushDataToCategory(categoryName,e.target.name,e.target.value)
}
</script>