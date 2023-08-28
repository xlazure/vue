<template>
    <input type="text" :name="inputProps.name" :placeholder="inputProps.placeholder"/>
</template>

<script setup>
    const { inputProps, categoryName } = defineProps(['input-props', 'category-name'])
</script>