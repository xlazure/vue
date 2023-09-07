<template>
    <span v-if="columnName === 'columnA'">
        <CheckboxItem v-for="(item, index) in countryStore.state.columns.columnA" :key="index" :is="item"
        :index="index" @setCopyItem="setCopyItem" :columnName="columnName">
        <template #btn-name>
            {{ item.data.name }}
        </template>
    </CheckboxItem>
    <p v-if="countryStore.state.loading">Loading...</p>
    </span>
    <span v-else-if="columnName === 'columnB'">
        <RadioItem
          v-for="(item, index) in countryStore.state.columns.columnB"
          :key="item.name"
          :index="index"
          :is="item"
          @replaceSelectedItemToColumn="replaceSelectedItemToColumn"
        >
          <template #name>
            {{ item.name }}
          </template>
        </RadioItem>
    </span>
    <span v-else-if="columnName === 'columnC'"> 
        {{ countryStore.state.columns.columnC }}
    </span>
</template>

<script lang="ts" setup>
import { inject } from "vue";
import CheckboxItem from './dragable/CheckboxItem.vue'
import RadioItem from './dragable/RadioItem.vue'
const { columnName } = defineProps(['columnName'])
import countryStore from ".././store/countryStore";
const selectedColumnNameProvider = inject('selectedColumnName')
const selectedCopyItemProvider = inject('copyItem')

function setCopyItem(item:any) {
    selectedCopyItemProvider.value = item
    selectedColumnNameProvider.value = columnName
}

function replaceSelectedItemToColumn(item:any) {
    countryStore.mutations.setColumnC(item)
}

</script>