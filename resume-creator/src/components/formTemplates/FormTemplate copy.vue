<template>
  <form class="form" @change="handleSubmitChange">
    <h4>{{ formTypeFromJson  }}</h4>
    <FormLayout :layout="layout" :formTypeFromJson="formTypeFromJson">
      <template #default="{item}">
        <FormInput :inputProps="item" :categoryName="formTypeFromJson" />
      </template>
    </FormLayout>
  </form>
</template>

<script setup>
const { formTypeFromJson = 'example', layout = [1, 2] } = defineProps([
  'layout',
  'formTypeFromJson'
])
import FormLayout from './FormLayout.vue'
import FormInput from './FormInput.vue'
import { onMounted } from 'vue';
import { resumeFormStore } from '../../stores/resume-form'

onMounted(()=>{
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
}
</style>
