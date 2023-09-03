import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useResumeFormStore = defineStore('resume-form', () => {
  const resumeForm = ref({})
  const repeaterStore = ref({})

  const createCategory = (categoryName) => {
    const storeForm = {
      id: Date.now() + Math.floor(Math.random() * 100),
      data: {},
      repeater: [],
    }

    if (!resumeForm.value[categoryName]) {
      resumeForm.value[categoryName] = storeForm
    }
  }

  const pushDataToCategory = (category, key, value) => {
    if (!resumeForm.value[category]) {
      createCategory(category)
    }

    if (resumeForm.value.hasOwnProperty(category)) {
      resumeForm.value[category].data[key] = value
    }
  }

  const pushReapterToCategory = (category, object) => {
    if (!resumeForm.value[category]) {
      createCategory(category)
    }

    if (resumeForm.value.hasOwnProperty(category)) {
      resumeForm.value[category].repeater.push({ object })
    }
  }

  return { createCategory, pushDataToCategory, resumeForm,pushReapterToCategory }
})

export const resumeFormStore = useResumeFormStore()
