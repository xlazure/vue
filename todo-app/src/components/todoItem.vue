<template>
    <li :class="{isComplited: todo.isCompleted}">
        <p>{{ todo.name }}</p>
        <div>
            <button @click="this.$emit('removeTodo', todo.id)">
                <TrashIcon />
            </button>
            <button @click="this.$emit('completeTodo', todo.id)">
                <CompletedIcon />
            </button>
        </div>
    </li>
</template>

<script>
import CompletedIcon from './icons/completedIcon.vue';
import TrashIcon from './icons/trashIcon.vue';




export default {
    name: "TodoItem",
    props: {
        todo: Object,
    },
    components: { CompletedIcon, TrashIcon }
}

</script>

<style scoped>
    .isComplited {
        opacity: 0.5;
    }
    li {

        display: flex;
        justify-content:space-between;

        width:100%;
        margin-top: 12px;
        list-style: none;
        padding: 8px;
        border-radius:8px;
        border: 2px solid #9d9191;
       
    }


    li button > svg {
        vertical-align:text-bottom;
    }

    li,
    li > * {
        font-size: 1.5rem;
    }

    li > p {
        text-transform: capitalize;
    }

</style>