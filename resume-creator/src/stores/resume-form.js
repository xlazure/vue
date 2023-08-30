import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useResumeFormStore = defineStore('resume-form', () => {
  const resumeForm = ref({})
  const repeaterStore = ref({})

  const createCategory = (categoryName) => {
    const storeForm = {
      id: Date.now() + Math.floor(Math.random() * 100),
      data: {}
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

  return { createCategory, pushDataToCategory, resumeForm }
})

export const resumeFormStore = useResumeFormStore()
