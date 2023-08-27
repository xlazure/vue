<template>
  <div v-for="(rowCount, rowIndex) in layout" :key="rowIndex" class="form__row">
    <label
      class="form__row-label"
      v-for="(item, itemIndex) in getObjectsForIndex(rowIndex)"
      :key="itemIndex"
    >
      <slot />
    </label>
  </div>
</template>

<script setup>
import cvJsonTemplate from './cv-form.json'
const formTemplate = cvJsonTemplate[formTypeFromJson]
const props = defineProps(['layout', 'formTypeFromJson'])

const getObjectsForIndex = (index) => {
  if (layout === undefined || formTypeFromJson === undefined || formTemplate === undefined) return
  const start = layout.slice(0, index).reduce((sum, val) => sum + val, 0)
  const end = start + layout[index]
  return formTemplate.slice(start, end)
}
</script>
