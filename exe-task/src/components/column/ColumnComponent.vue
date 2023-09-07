<script lang="ts" setup>
import { inject } from 'vue';
import type { Ref } from "vue";
import ColumnInputPicker from '../ColumnInputPicker.vue'
import countryStore from '@/store/countryStore';

const selectedColumnNameProvider= inject('selectedColumnName')
const selectedCopyItemProvider = inject('copyItem')

const { ID } = defineProps(['ID']);
const columnsStore = countryStore.state.columns

function removeItemFromColumn(column:any, item:any) {
  const indexToRemove = column.findIndex((i:any) => i.name === item.name)
  if (indexToRemove !== -1) {
    column.splice(indexToRemove, 1)
  }
}

function onDrop() {
    const COLUMN_NAME = ID;
    const SELECTED_COLUMN = selectedColumnNameProvider?.value
    const COPY_ITEM = selectedCopyItemProvider?.value
    console.log(COPY_ITEM)
    if (!COLUMN_NAME) return;
    if(SELECTED_COLUMN === COLUMN_NAME) return;


    if (SELECTED_COLUMN === 'columnA' && COLUMN_NAME === "columnB") {
        countryStore.actions.addItemToColumn(COLUMN_NAME,COPY_ITEM);
    }
    if (SELECTED_COLUMN === 'columnB' && COLUMN_NAME === "columnC") {
        countryStore.actions.addItemToColumn(COLUMN_NAME,COPY_ITEM);
    }
}

</script>

<template>
    <section :id="ID" @drop="onDrop" @dragover.prevent>
        <div v-if="$slots.objects" class="block">
            <slot name="objects" />
          </div>
          <div class="block">
                <ColumnInputPicker :columnName="ID"/>
          </div>
    </section>
</template>

<style lang="scss" scoped>

    section {
        display: flex;
        background-color: #916f4d;
        &:nth-child(odd) {
            background-color: #d0a77f;
        }

        .block {
            display: block;
            width: 100%;
            border-right: 2px solid black;
        }
    }

</style>