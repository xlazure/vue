<template>
    <li :class="{ isComplited: todo.isCompleted }">
        <div>
            <form v-if="isEditing" @submit.prevent="updateTodo">
                <textarea type="text" name="title" :value="todo.title" />
                <input type="submit" value="save">
            </form>
            <p v-else>{{ todo.title }}</p>
        </div>
        <div style="text-align: right;">
            <button @click="this.$emit('removeTodo', todo.id)" title="Remove todo">
                <TrashIcon />
            </button>
            <button @click="editItem" title="Edit todo">
                <CloseIcon v-if="isEditing" /> 
                <EditIcon v-else /> 
            </button>
            <button @click="this.$emit('completeTodo', todo.id)" title="Complete todo">
                <CompletedIcon :style="{ opacity: todo.isCompleted ? 1 : 0 }" />
            </button>
        </div>
    </li>
</template>

<script>
import CompletedIcon from './icons/completedIcon.vue';
import TrashIcon from './icons/trashIcon.vue';
import EditIcon from './icons/editIcon.vue';
import CloseIcon from './icons/closeIcon.vue';

export default {
    name: "TodoItem",
    props: {
        todo: Object,
    },
    data() {
        return {
            isEditing: false,
        }
    },
    components: { CompletedIcon, TrashIcon,CloseIcon, EditIcon, },
    methods: {
        editItem() {
            this.isEditing = !this.isEditing
        },
        updateTodo(e) {
            this.$emit('updateTodo', this.todo.id, e.target.title.value )
            this.isEditing = !this.isEditing
        }
    }
}

</script>

<style scoped>
.isComplited {
    opacity: 0.5;
}

li {
    overflow: hidden;
    display: grid;
    gap:.2em;
    grid-template-columns: 60% 40%;
    justify-content: space-between;

    width: 100%;
    margin-top: 12px;
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    border: 2px solid #334155;

}

li button {
    transition: 200ms ease-in-out;
    margin-right: 4px;
    margin-bottom: 4px;
    background-color: transparent;
    border-radius: 8px;
    box-shadow: 0px 0px 0px 0px black;
}

li button:hover {
    cursor: pointer;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.483);
}

li button>svg {
    vertical-align: text-bottom;
}

li,
li > div > *,
li > *,
li form > *  {
    font-size: 1.8rem;
}
li form input {
   
    border-radius: 8px;
}
li form input[type="submit"] {
    margin-left:4px;
    background-color: #818cf8;
    color:#fff;
}

li form input[type="submit"]:hover {
    cursor: pointer;
    background-color: #6366f1;
}

li div > p {
    line-break: anywhere;
    text-transform: capitalize;
}

@media screen and (max-width: 768px) {

    li form input[type="submit"] {
        margin-left:0px;

    }

    li button>svg {
        vertical-align: text-bottom;
        width: 24px;
        height: 24px;
    }
}
</style>