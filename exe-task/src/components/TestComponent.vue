<template>
  <section id="A">
    <h3>KOLUMNA A</h3>
    <div class="block">
      <div class="column">
        <button @click="fetchData">Pobierz</button>
      </div>
      <div class="column" name="colA" @drop="onDrop" @dragover.prevent>
        <CheckboxItem
          v-for="(item, index) in state.colA"
          :key="item.name"
          @setCopyItem="setCopyItem"
          :is="item"
          :index="index"
          @changeCheckState="changeCheckState"
        >
          <template #btn-name>
            {{ item.name }}
          </template>
        </CheckboxItem>
      </div>
    </div>
  </section>
  <section id="B">
    <h3>KOLUMNA B</h3>
    <div class="block">
      <div class="column" name="colB" @drop="onDrop" @dragover.prevent>
        <RadioItem
          v-for="(item, index) in state.colB"
          :key="item.name"
          :index="index"
          :is="item"
          @replaceSelectedItemToColumn="replaceSelectedItemToColumn"
        >
          <template #name>
            {{ item.name }}
          </template>
        </RadioItem>
      </div>
    </div>
  </section>
  <section id="C">
    <h3>KOLUMNA C</h3>
    <div class="block">
      <div class="column">
        <CheckboxItem
          v-for="(item, index) in state.colC"
          :key="item.name"
          :is="item"
          :index="index"
          @setCopyItem="setCopyItem"
          :isBtn="true"
        >
          <template #btn-name>
            {{ item.name }}
          </template>
          {{ item }}
        </CheckboxItem>
      </div>
    </div>
  </section>
</template>

<script setup>
import CheckboxItem from '@/components/dragable/CheckboxItem.vue'
import RadioItem from '@/components/dragable/RadioItem.vue'
import { getAllCountries } from '../services/countriesApi/controller/countries' // Import your API function

import { reactive, ref } from 'vue'

const state = reactive({
  colA: [],
  colB: [],
  colC: []
})

const copyItem = ref(null)

async function fetchData() {
  const response = await getAllCountries()
  const limitedResponse = response.slice(0, 20)
  state.colA = limitedResponse
}

function setCopyItem(item) {
  copyItem.value = item.name
}

function moveItemFromColCtoColA(item) {
  // Remove the item from ColB and ColA
  removeItemFromColumn(state.colB, item);
  removeItemFromColumn(state.colC, item);

  // Set isChecked to false
  item.isChecked = false;

  // Add the item to ColA
  addItemToColumn(state.colA, item);
}


function removeItemFromColumn(column, item) {
  const indexToRemove = column.findIndex((i) => i.name === item.name)
  if (indexToRemove !== -1) {
    column.splice(indexToRemove, 1)
  }
}

function addItemToColumn(column, item) {
  if (!column.some((i) => i.name === item.name)) {
    column.push(item)
  }
}
function replaceSelectedItemToColumn(item) {
  state.colC = [item]
}
function changeCheckState(updatedItem) {
  const itemToUpdate = state.colA[updatedItem.index]
  itemToUpdate.isChecked = updatedItem.isChecked

  if (updatedItem.isChecked) {
    addItemToColumn(state.colB, itemToUpdate)
  } else {
    removeItemFromColumn(state.colB, itemToUpdate)
    removeItemFromColumn(state.colC, itemToUpdate)
  }
}

function onDrop(e) {
  const colName = e.target?.attributes?.name?.value;
  if (!colName || !copyItem.value) return;

  if (colName === "colA") {
    const itemToUpdate = state.colA.find((item) => item.name === copyItem.value);
    if (itemToUpdate) {
      moveItemFromColCtoColA(itemToUpdate);
    }
  } else {
    const itemExists = state[colName].some((item) => item.name === copyItem.value);

    if (!itemExists) {
      const itemToUpdate = state.colA.find((item) => item.name === copyItem.value);
      if (itemToUpdate) {
        itemToUpdate.isChecked = true;
        addItemToColumn(state[colName], itemToUpdate);
      }
    }
  }
}


</script>

<style scoped>
h3 {
  color: black;
  display: block;
  text-align: center;
  border-bottom: 2px solid red;
}

section {
  color: green;
  background-color: #fff;

  .block {
    height: 100%;
    display: flex;
    width: 100%;

    .column {
      width: 100%;
      border-right: 2px solid red;
    }
  }
}
</style>
