<template>
  <section id="colA">
    <h3>KOLUMNA A</h3>
    <div class="block">
      <div class="column"></div>
      <div class="column">
        <VueDraggable v-model="list1" @start="onStart" @clone="onClone" :group="{name:'shared',pull:'clone',put:false}" filter="noClone">
          <button v-for="item in list1" :key="item.id" >
            {{ item.name }}
          </button>
        </VueDraggable>
      </div>
    </div>
  </section>
  <section id="colB">
    <h3>KOLUMNA B</h3>
    <div class="block">
      <div class="column">
        <VueDraggable :ref="p" class="noClone" style="width: 100%;height:100%;"  v-model="list2" @start="onStart" @end="onEnd"  @add="onAdd" group="shared">
          <button v-for="item in list2" :key="item.id">
            {{ item.name }}
          </button>
        </VueDraggable>
      </div>
    </div>
  </section>
  <section id="colC">
    <h3>KOLUMNA C</h3>
    <div class="block">
      <div class="column"></div>
    </div>
  </section>

</template>

<script lang="ts" setup>
import { type UseDraggableReturn, VueDraggable } from 'vue-draggable-plus'
import { ref } from 'vue'
const list1 = ref([
  {
    name: 'Joao',
    id: '1'
  },
  {
    name: 'Jean',
    id: '2'
  },
  {
    name: 'Johanna',
    id: '3'
  },
  {
    name: 'Juan',
    id: '4'
  }
])
const list2 = ref([])

const list3 = ref(
  list1.value.map(item => ({
    name: `${item.name}-3`,
    id: `${item.id}-3`
  }))
)

const p = ref()
const el = ref<UseDraggableReturn>()
const disabled = ref(false)

function onAdd(e) {
  console.log('add',e.item,e)
}
function onStart(e) {
  console.log('start')
}
function onEnd(e) {
  console.log('end')
}
function onClone(e) {
  console.log('clone',e)
}


</script>

<style lang="scss" scoped>
h3 {
  color: black;
  display: block;
  text-align: center;
  border-bottom: 2px solid red;
}

section {

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

.tile {}
</style>
