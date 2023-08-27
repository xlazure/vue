<template>
  <input :type="inputProps.elementType" :placeholder="inputProps.placeholder" />
</template>

<script setup>
const { props: inputProps } = defineProps(['inputProps'])
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 0.5rem;
  border-radius: 8px;
}
</style>
