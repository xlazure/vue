<template>
  <input
    :id="'c' + props.index"
    type="checkbox"
    :checked="props.is.isChecked"
    :name="props.is.name"
    @change="changeCheckState"
  />
  <label :for="'c' + props.index" :draggable="true" @dragstart="onDragStart" @dragend="onDragEnd">
    <span class="custom-button">
      <slot name="btn-name" />
    </span>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps(['is', 'index'])
const emits = defineEmits(['setCopyItem', 'removeItemFormColumn', 'changeCheckState'])

function onDragStart() {
  console.log('drag start')
  emits('setCopyItem', props.is)
}
function onDragEnd() {
  console.log('drag end')
}
function changeCheckState() {
  emits('changeCheckState', {
    name: props.is.name,
    index: props.index,
    isChecked: !props.is.isChecked
  })
}
</script>

<style scoped>
label {
  display: block;
  overflow: hidden;
  float: left;
  margin: 1px;
  background-color: #2a2424;
  color: #fff;
  font-weight: 700;
}

input {
  display: none;
}

input:checked + label {
  opacity: 0.8;
}
</style>
