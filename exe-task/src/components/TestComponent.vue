<script lang="ts" setup>
import { ref } from 'vue'

import CheckboxItem from '@/components/CheckboxItem.vue'
import RadioItem from '@/components/RadioItem.vue'
import countryStore from '@/store/countryStore'

const currentDragTarget = ref('')

function useDrag(targetValue: string) {
  currentDragTarget.value = targetValue
}
function updateColumn() {
  console.log(currentDragTarget.value)
}
</script>

<template>
  <section id="A" @dragenter="useDrag('A')">
    <h3>KOLUMNA A</h3>
    <div class="block">
      <div class="column">
        <button @click="() => countryStore.actions.fetchCountries()">Pobierz</button>
        {{ currentDragTarget.value }}
      </div>
      <div class="column">
        <p v-if="countryStore.state.loading">Loading</p>
        <CheckboxItem
          v-else
          v-for="(item, index) in countryStore.state.countries"
          :key="item.name"
          :index="index"
          :name="item.name"
          @updateColumn="updateColumn"
        >
          <template #name>
            {{ item.name }}
          </template>
        </CheckboxItem>
      </div>
    </div>
  </section>
  <section id="B" @dragenter="useDrag('B')">
    <h3>KOLUMNA B</h3>
    <div class="block">
      <div class="column"></div>
    </div>
  </section>
  <section id="C" @dragenter="useDrag('C')">
    <h3>KOLUMNA C</h3>
    <div class="block">
      <div class="column"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
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
