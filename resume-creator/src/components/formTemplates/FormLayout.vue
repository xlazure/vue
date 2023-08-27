<template>
  <div  v-for="(rowCount, rowIndex) in layout" :key="rowIndex" class="form__row">
    <label
      class="form__row-label"
      v-for="(item, itemIndex) in getObjectsForIndex(rowIndex)"
      :key="itemIndex"
    >
      <slot :item="item"/>
    </label>
  </div>
</template>

<script setup>
import cvJsonTemplate from './cv-form.json'
const formTemplate = cvJsonTemplate[formTypeFromJson]
const {layout = [2,2,3],formTypeFromJson = 'example',subForm} = defineProps(['layout', 'formTypeFromJson','subForm'])

const getObjectsForIndex = (index) => {
  if (layout === undefined || formTypeFromJson === undefined || formTemplate === undefined) return

  if(subForm) {
    
    const start = layout.slice(0, index).reduce((sum, val) => sum + val, 0)
    const end = start + layout[index]
    return subForm.slice(start, end)
  }
  const start = layout.slice(0, index).reduce((sum, val) => sum + val, 0)
  const end = start + layout[index]
  return formTemplate.slice(start, end)
}
</script>
