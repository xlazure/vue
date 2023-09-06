<template>
  <span>
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
  </span>
  
</template>

<script lang="ts" setup>
const props = defineProps(['is', 'index','isBtn'])
const emits = defineEmits(['setCopyItem', 'removeItemFormColumn', 'changeCheckState'])




function onDragStart() {
  console.log('drag start')
  emits('setCopyItem',props.is.data)
}
function onDragEnd() {
  console.log('drag end')
}
function changeCheckState() {
  emits('changeCheckState', {
    name: props.is.data.name,
    index: props.index,
    isChecked: !props.is.isChecked
  })
}
</script>

<style lang="scss" scoped>
label {
  display: block;
  overflow: hidden;
  float: left;
  margin: 1px;
  background-color: #ffffff;
  color: #000000;
  font-weight: 700;
  border-radius: 4px;

  &:focus, 
  &:active {
    background-color: #c4c4c4;
  }
}

input {
  display: none;
}

input:checked + label {
  opacity: 0.8;
}
</style>
