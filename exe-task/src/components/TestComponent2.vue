<script lang="ts" setup>
import CheckboxItem from '@/components/dragable/CheckboxItem.vue'
import { reactive, ref } from 'vue'

const state = reactive({
  colA:['soda','cola','pepsi'],
  colB:[],
  colC:[]
})

const copyItem = ref(null);

function setCopyItem(item:any) {
  copyItem.value = item
}

function onDrop(e) {
  const colName = e.target.attributes.name.value;

  if(!colName) return;

  if(state[colName].includes(copyItem.value)) {
    console.log('item exist in array')
    return;
  }

  state[colName].push(copyItem.value)
}

</script>

<template>
  <section id="A">
    <h3>KOLUMNA A</h3>
    <div class="block">
      <div class="column">
      </div>
      <div class="column">
       <CheckboxItem v-for="(item,index) in state.colA" :key="item" @setCopyItem="setCopyItem" :is="item" :index="index">
        <template #btn-name>
          {{ item }}
        </template>
       </CheckboxItem>
      </div>
    </div>
  </section>
  <section id="B">
    <h3>KOLUMNA B</h3>
    <div class="block">
      <div class="column" name="colB" @drop="onDrop" @dragover.prevent>
        {{ state.colB }}
      </div>
    </div>
  </section>
  <section id="C">
    <h3>KOLUMNA C</h3>
    <div class="block">
      <div class="column">
        {{ state.colC }}
      </div>
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
