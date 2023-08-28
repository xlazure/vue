<template>
  <div class="resume">
    RESUME
    <div>
      <p v-for="item in resumeFormStore.resumeForm">{{ item }}</p>
    </div>
  </div>
</template>

<script setup>
import { useResumeFormStore } from '../../stores/resume-form'

const resumeFormStore = useResumeFormStore()
</script>

<style lang="scss" scoped>
.resume {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 2px solid black;
}
</style>
