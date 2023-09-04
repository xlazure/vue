<template>
  <input :id="'r' + props.index" type="radio" name="radio" @click="replaceSelectedItemToColumn" />
  <label :for="'r' + props.index">
    <span class="custom-button">
      <slot name="name" />
    </span>
  </label>
</template>

<script lang="ts" setup>
const props = defineProps(['index', 'is'])
const emits = defineEmits(['replaceSelectedItemToColumn'])

function replaceSelectedItemToColumn() {
  emits('replaceSelectedItemToColumn', {
    name: props.is.name,
    index: props.index
  })
}
</script>

<style lang="scss" scoped>
label {
  display: block;
  overflow: hidden;
  float: left;
  margin: 1px;
  background-color: orange;
  color: #000;

  .custom-button {
    text-align: center;

    padding: 3px 0;
  }
}

input {
  display: none;
}

input:checked + label {
  opacity: 0.5;
}
</style>
