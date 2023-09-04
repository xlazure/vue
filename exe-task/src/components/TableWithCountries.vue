<script setup lang="ts">
import { ref } from 'vue'
import { VueDraggable } from 'vue-draggable-plus'
import CheckboxItem from '@/components/CheckboxItem.vue'
import RadioItem from '@/components/RadioItem.vue'
import countryStore from '@/store/countryStore'
import type { SortableEvent } from 'sortablejs'

function fetchData() {
  countryStore.actions.fetchCountries()
}

function onClone(e: any) {
  return
}
function onStart(event: SortableEvent) {
  console.log('start drag')
}

function onEnd(event: SortableEvent) {
  console.log('end drag')
}
</script>

<template>
  <section id="A">
    <div class="col">
      <button @click="fetchData">Pobierz</button>
    </div>
    <div class="col">
      <p v-if="countryStore.state.loading">Loading</p>
      <VueDraggable
        v-else
        @onStart="onStart"
        @onEnd="onEnd"
        :sort="false"
        v-model="countryStore.countries1.value"
        :animation="150"
        ghostClass="ghost"
        filter=".no-clone"
        :group="{ name: 'people', pull: 'clone', put: false }"
        @clone="onClone"
      >
        <CheckboxItem
          v-for="(item, index) in countryStore.countries1.value"
          :key="item.name"
          :index="index"
          :name="item.name"
          :label="item.name"
        >
          <template #name>
            {{ item.name }}
          </template>
        </CheckboxItem>
      </VueDraggable>
    </div>
  </section>
  <section id="B">
    <div class="col">
      <VueDraggable
        class="no-clone"
        style="width: 100%; height: 100%"
        :sort="false"
        v-model="countryStore.columnB1.value"
        :animation="150"
        ghostClass="ghost"
        group="people"
      >
        <RadioItem
          v-for="(item, index) in countryStore.columnB1.value"
          :key="index"
          :index="index"
          :name="item.name"
        >
          <template #name>
            {{ item.name }}
          </template>
        </RadioItem>
      </VueDraggable>
    </div>
  </section>
  <section id="C">
    <div class="col"></div>
  </section>
  <preview-list :list="countryStore.countries1.value" />
  <preview-list :list="countryStore.columnB1.value" />
</template>

<style lang="scss" scoped>
section {
  display: flex;
  background: #595959;

  .col {
    border-right: 1px solid black;
    color: #000;
    width: 100%;
    background-color: rgb(195, 145, 91);

    &:nth-of-type(even) {
      background-color: rgb(146, 185, 98);
    }
  }
}
</style>
