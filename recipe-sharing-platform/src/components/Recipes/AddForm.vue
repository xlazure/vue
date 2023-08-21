<template>
      <q-card v-if="isOpen">Add Recipe
        <form>
            <input type="text" name="recipeTitle" />
        </form>
      </q-card>
  </template>
  
  <script setup lang="ts">
  import { ref,defineProps } from 'vue';
  
  const addFormTitle = ref("Add Recipe");
  const { isOpen } = defineProps(['isOpen']);

  </script>
  
  <style scoped>
  </style>
  