<template>
    <input :id="'c' + index" type="checkbox" :name="name" @click="foo" />
    <label :for="'c' + index" >

        <span class="custom-button" >
            <slot name="name" />
        </span>
    </label>
</template>

<script lang="ts" setup>
const { index,name } = defineProps(["index","name"]);
const emit = defineEmits(['pushToColumnB','removeFromColumnB']);

function foo(e:any) {
    console.log(e.target.checked)
    
    if(e.target.checked) emit('pushToColumnB'); 
    else emit("removeFromColumnB")
}


</script>

<style lang="scss" scoped>
label {
    display:block;
    overflow: hidden;
    float: left;
    margin: 1px;
    background-color: #fff;

    // .custom-button {
    //     text-align: center;
        
    //     padding: 3px 0;

    //     &:hover {
    //         cursor: pointer;
    //     }

    //     &:active {
    //         cursor:move;
    //     }
    // }

}

input {
    display: none;
}

input:checked+label {
    background-color: red;
}
</style>