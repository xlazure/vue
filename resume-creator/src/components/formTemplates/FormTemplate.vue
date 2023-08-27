<template>
  <form class="form">
    <p v-if="!formTemplate">Template for {{ formTypeFromJson }} is empty</p>
    <div v-for="(rowCount, rowIndex) in layout" :key="rowIndex" class="form__row">
      <label
        class="form__row-label"
        v-for="(item, itemIndex) in getObjectsForIndex(rowIndex)"
        :key="itemIndex"
      >
        <p>{{ item.name }}</p>
        <FormInput :inputProps="item" />
      </label>
    </div>
  </form>
</template>

<script setup>
const { formTypeFromJson = 'example', layout = [1, 2] } = defineProps([
  'layout',
  'formTypeFromJson'
])

import FormInput from './FormInput.vue'
import cvJsonTemplate from './cv-form.json'

const formTemplate = cvJsonTemplate[formTypeFromJson]

const getObjectsForIndex = (index) => {
  if (layout === undefined || formTypeFromJson === undefined || formTemplate === undefined) return
  const start = layout.slice(0, index).reduce((sum, val) => sum + val, 0)
  const end = start + layout[index]
  return formTemplate.slice(start, end)
}
</script>

<style lang="scss" scoped>
.form {
  padding: 1.25em;

  &__row {
    display: flex;
    margin-bottom: 8px;
    gap: 1em;

    &-label {
      width: 100%;
    }
  }
}
</style>
