<template>
    <textarea :placeholder="inputProps.placeholder" :name="inputProps.name" />
</template>

<script setup>
const { inputProps, categoryName } = defineProps(['input-props', 'category-name']);
</script>