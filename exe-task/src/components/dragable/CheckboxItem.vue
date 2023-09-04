<template>
    <input :id="'c' + props.index" type="checkbox" :name="name" @click="foo" />
    <label :for="'c' + props.index" :draggable="true" @dragstart="onDragStart" @dragend="onDragEnd">
        <span class="custom-button">
            <slot name="btn-name" />
        </span>
    </label>
</template>

<script lang="ts" setup>

const props = defineProps(['is', 'index']);
const emits = defineEmits(['setCopyItem']);

function onDragStart() {
    console.log('drag start')
    emits('setCopyItem', props.is)

}
function onDragEnd() {
    console.log('drag end')
    // emits('push')
}


</script>

<style scoped>
label {
    display: block;
    overflow: hidden;
    float: left;
    margin: 1px;
    background-color: #2a2424;
}

input {
    display: none;
}

input:checked+label {
    background-color: red;
}
</style>