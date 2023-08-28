<template>
    <select :name="inputProps.placeholder">
        <option value="">Wybierz</option>
    </select>
</template>

<script setup>
const { inputProps, categoryName } = defineProps(['input-props', 'category-name']);
</script>