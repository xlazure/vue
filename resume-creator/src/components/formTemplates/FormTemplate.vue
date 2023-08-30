<template>
  <form class="form" @submit.prevent="handleSubmitChange">
    <FormLayout :layout="layout" :formTypeFromJson="formTypeFromJson">
      <template #default="{ item }">
        <FormInputPicker :is="item" :category-name="formTypeFromJson" />
      </template>
    </FormLayout>
  </form>
</template>

<script setup>
import { defineProps } from 'vue'
import { onMounted } from 'vue'
import { resumeFormStore } from '../../stores/resume-form'
import FormLayout from './FormLayout.vue'
import FormInputPicker from './FormInputPicker.vue'
const { formTypeFromJson = 'example', layout = [1, 2] } = defineProps([
  'layout',
  'formTypeFromJson'
])

onMounted(() => {
  resumeFormStore.createCategory(formTypeFromJson)
})

const handleSubmitChange = (e) => {
  console.log(e.target.value)
}
</script>

<style lang="scss">
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

  input,
  select,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border-radius: 8px;
  }

  textarea {
    resize: vertical;
  }
}
</style>
