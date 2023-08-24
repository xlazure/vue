<template>
  <div>
    <StepNavigation />
    <div class="wrapper">
      <RouterView />
      <ResumeViewer />
    </div>
  </div>
</template>

<script setup>
import ResumeViewer from '../components/Creator/ResumeViewer.vue'
import StepNavigation from '../components/Creator/StepNavigation.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  height: 94.9vh;
  grid-template-columns: 55% 45%;
}
</style>
