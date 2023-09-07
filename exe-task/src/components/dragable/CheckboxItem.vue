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
import countryStore from '@/store/countryStore';
const props = defineProps(['is', 'index','isBtn','columnName'])
const emits = defineEmits(['setCopyItem', 'removeItemFormColumn', 'changeCheckState',])




function onDragStart() {
  console.log('drag start')
  emits('setCopyItem',props.is)
}
function onDragEnd() {
  console.log('drag end')
}
function changeCheckState() {
  // emits('changeCheckState', {
  //   name: props.is.data.name,
  //   index: props.index,
  //   isChecked: !props.is.isChecked
  // })
  // const itemToUpdate = state.colA[updatedItem.index]
    
  countryStore.actions.changeCheckState(props.columnName,props.index)

  console.log(countryStore.state.columns[props.columnName])
  console.log(props.is)

  // const itemToUpdate = countryStore.state.columns[props.columnName][0][props.index]
  // itemToUpdate.isChecked = !itemToUpdate.isChecked


  if (props.is.isChecked) {
    countryStore.actions.addItemToColumn('columnB', props.is.data)
  } else {
    countryStore.actions.removeItemFromColumn('columnB', props.is.data)
    countryStore.actions.removeItemFromColumn('columnC', props.is.data)
  }
  //   countryStore.actions.addItemToColumn('columnB', props.is.data)
  // } else {
  //   countryStore.actions.removeItemFromColumn('columnB', props.is.data)
  //   countryStore.actions.removeItemFromColumn('columnC', props.is.data)
  // }
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
   opacity: 0.6;
  }

  .custom-button {
    font-weight: 700;
  }
}

input {
  display: none;
}

input:checked + label {
  background-color: #1bdc1b;
}
</style>
