<template>
  <input :id="'c' + index" type="checkbox" :name="name" @click="foo" />
  <label
    :for="'c' + index"
    :draggable="true"
    @dragstart="() => console.log('start drag')"
    @dragend="() => emit('updateColumn')"
  >
    <span class="custom-button">
      <slot name="name" />
    </span>
  </label>
</template>

<script lang="ts" setup>
const { index, name } = defineProps(['index', 'name'])
const emit = defineEmits(['useDrag', 'updateColumn'])

function foo(e: any) {
  console.log(e.target.checked)

  //   if (e.target.checked) emit('pushToColumnB')
  //   else emit('removeFromColumnB')
}
</script>

<style lang="scss" scoped>
label {
  display: block;
  overflow: hidden;
  float: left;
  margin: 1px;
  background-color: #2a2424;

  // .custom-button {
  //     text-align: center;

  //     padding: 3px 0;

  //     &:hover {
  //         cursor: pointer;
  //     }

  //     &:active {
  //         cursor:move;
  //     }
  // }
}

input {
  display: none;
}

input:checked + label {
  background-color: red;
}
</style>
