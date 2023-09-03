<script setup lang="ts">
import countryStore from '@/store/countryStore.ts';
import CheckboxItem from '@/components/CheckboxItem.vue';
import RadioItem from '@/components/RadioItem.vue';

function foo() {
  countryStore.actions.fetchCountries();
}

function removeFromColumnB(item: any) {
  countryStore.actions.removeItemToColumnB(item)
}
function pushToColumnB(item: any) {
  console.log('push')
  countryStore.actions.appendItemToColumnB(item)
}

</script>

<template>
  <div id="app">
    <section id="A">
      <div class="col">
        <button @click="foo">Pobierz</button>
      </div>
      <div class="col">
        <p v-if="countryStore.state.loading">Loading</p>
         <CheckboxItem v-else v-for="(item,index) in countryStore.state.countries" :key="item.name" :index="index" :name="item.name" @pushToColumnB="pushToColumnB(item)" @removeFromColumnB="removeFromColumnB(item)">
          <template #name>
              {{item.name}}
          </template>
         </CheckboxItem>
      </div>
    </section>
    <section id="B">
      <div class="col">
        <RadioItem v-for="(item,index) in countryStore.state.columnB" :key="index" :index="index" :name="item.name">
          <template #name>
              {{item.name}}
          </template>
         </RadioItem>
      </div>
    </section>
    <section id="C">
      <div class="col">
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>
  #app {
    height: 100vh;
    margin: 0 auto;
    max-width: 1024px;

    display: grid;
    grid-template-columns: repeat(3,1fr);
    section {
      
      display:flex;
      background:#595959;

      .col {
        border-right: 1px solid black;
        color:#000;
        width: 100%;
        background-color: rgb(195, 145, 91);

        &:nth-of-type(even) {
          background-color: rgb(146, 185, 98);
        }
      }
    }
    
  }
</style>
