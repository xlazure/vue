<template>
    <input :id="'r' + index" type="radio" name="'radio'"  />
    <label :for="'r' + index" >

        <span class="custom-button" >
            <slot name="name" />
        </span>
    </label>
</template>

<script lang="ts" setup>
const { index } = defineProps(["index"]);

</script>

<style lang="scss" scoped>
label {
    display:block;
    overflow: hidden;
    float: left;
    margin: 1px;
    background-color: #8e59a6;

    .custom-button {
        text-align: center;
        
        padding: 3px 0;

        &:hover {
            cursor: pointer;
        }

        &:active {
            cursor:move;
        }
    }

}

input {
    display: none;
}

input:checked+label {
    background-color: red;
}
</style>