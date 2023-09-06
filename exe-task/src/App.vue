<script setup lang="ts">
// import TableWithCountries from '@/components/TableWithCountries.vue'
// import TestComponent from '@/components/TestComponent.vue';
import ThreeColumns from '@/components/ThreeColumns.vue';

// import CheckboxItem from '@/components/CheckboxItem.vue';
// import RadioItem from '@/components/RadioItem.vue';


// function removeFromColumnB(item: any) {
//   countryStore.actions.removeItemToColumnB(item)
// }
// function pushToColumnB(item: any) {
//   console.log('push')
//   countryStore.actions.appendItemToColumnB(item)
// }

</script>

<template>
  <ThreeColumns />
</template>

<style lang="scss">
  #app {
    height: 100vh;
    margin: 0 auto;
    max-width: 1024px;

    display: grid;
    grid-template-columns: repeat(3,1fr);
    
  }
</style>
