<template>
  <h4>Recipes: <q-btn color="primary" label="Add" @click="openModal" /></h4>

  <ul>
    <li v-for="recipe in recipes" :key="recipe.title">
      {{ recipe.title }}
    </li>
  </ul>

  <AddForm :isOpen="isOpen" />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'; // Import ref and onMounted
import { collection, getDocs } from '@firebase/firestore';
import AddForm from '../components/Recipes/AddForm.vue'
import { db } from '../lib/firebase';

interface Recipe {
  title: string;
}




export default defineComponent({
  name: 'RecipesPage',
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    openModal() {
      this.isOpen = !this.isOpen 
    }
  },
  setup() {
    const recipes = ref<Recipe[]>([]); // Define recipes as a ref
    onMounted(async () => {
      const querySnapshot = await getDocs(collection(db, 'recipes'));
      const data: Recipe[] = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data() as Recipe);
      });
      recipes.value = data;
    });
    return { recipes };
  },
  components: { AddForm }
});
</script>
