<template>
    <span v-if="columnName === 'columnA'">
        <CheckboxItem v-for="(item, index) in countryStore.state.columns.columnA[0]" :key="index" :is="item"
        :index="index" @setCopyItem="setCopyItem" >
        <template #btn-name>
            {{ item?.data?.name }}
        </template>
    </CheckboxItem>
    <p v-if="countryStore.state.loading">Loading...</p>
    </span>
    <span v-else-if="'columnB'">
        {{ countryStore.state.columns.columnB }}
    </span>
    <span v-else-if="'columnC'"> 
        test
    </span>
</template>

<script lang="ts" setup>
import { inject, onMounted,onUpdated } from "vue";
import CheckboxItem from './dragable/CheckboxItem.vue'
const { columnName } = defineProps(['columnName'])
import countryStore from ".././store/countryStore";
const selectedColumnNameProvider = inject('selectedColumnName')
const selectedCopyItemProvider = inject('copyItem')

function setCopyItem(item:any) {
    selectedCopyItemProvider.value = item
    selectedColumnNameProvider.value = columnName
}

onMounted(() => {
    console.log('mounted')
})

onUpdated(()=>{
    console.log('update')
})

</script>