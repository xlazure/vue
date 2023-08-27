import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useResumeFormStore = defineStore('resume-form', () => {
  const resumeForm = ref([])
  const createCategory = (category) => {
    console.log(resumeForm.value)
    if (resumeForm.value.some(i => i.category === category)) return;

    const form = {
      category: category,
      data: []
    }

    resumeForm.value.push(form)
  }
  const pushDataToCategory = (category,data) => {
   const categoryObj = resumeForm.value.find(i => i.category === category);

   if (!categoryObj) {
    console.log(`Category '${category}' not found.`);
    return;
}

    categoryObj.data.push(data);
  }

  return { createCategory, pushDataToCategory, resumeForm }
})
