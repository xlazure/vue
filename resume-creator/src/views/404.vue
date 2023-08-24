<template>
  <h1>404 Error page</h1>
  <button @click="router.back()">Return</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style scoped></style>
