<template>
    <q-btn-group spread class="wrapper">
        <q-btn class="item-step" v-for="item in itemSteps" stretch :label="item.label" :href="item?.link" />
    </q-btn-group>
</template>

<script setup>
const itemSteps = [
    {
        label: "Dane osobowe",
        icon: "",
        link: "/creator/"
    },
    {
        label: "Doświadczenie",
        icon: "",
        link: "/creator/experience"
    },
    {
        label: "Wykształcenie",
        icon: "",
    },
    {
        label: "Umiejętności",
        icon: "",
    },
    {
        label: "Klauzula CV",
        icon: "",
    },
    {
        label: "Zainteresowania",
        icon: "",
    },
    {
        label: "Języki Obce",
        icon: "",
    },
    {
        label: "Oprogramowanie",
        icon: "",
    },
    {
        label: "Kursy",
        icon: "",
    },
    {
        label: "Podsumowanie",
        icon: "",
    },
]
</script>

<style scoped>
.item-step {
    font-size: clamp(0.625rem, 0.0536rem + 0.8929vw, 1.125rem);
}
</style>