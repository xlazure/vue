<script lang="ts" setup>
import countryStore from "../store/countryStore";
import ColumnComponent from "./column/ColumnComponent.vue"
</script>

<template>
    <ColumnComponent ID="columnA">
        <template #objects>
            <button @click="countryStore.actions.fetchCountries()">Pobierz</button>
        </template>
    </ColumnComponent>
    <ColumnComponent ID="columnB" />
    <ColumnComponent ID="columnC"/>

</template>

<style lang="scss" scoped></style>