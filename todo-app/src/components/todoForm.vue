<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="new todo..." :value="newTodo" @input="updateNewTodo"/>
        <button type="submit">Add Todo</button>
        <p class="error" v-if="error">{{ error }}</p>
    </form>
</template>

<script>
export default {
    name:"TodoForm",
    props: {
        newTodo:String,
    },
    data() {
        return {
            error: ""
        }
    },
    methods: {
        handleSubmit() {

            const newTodoForm = {
                id:Math.random() + "" + new Date().getTime(),
                title: this.newTodo,
                isComplete:false,
            }

            if (this.newTodo.trim() !== "") {
                this.$emit('addTodo', newTodoForm); // Emit an event to parent to add the todo
                this.$emit('update:newTodo', ''); // Clear the input field
            } else {
                this.error = "Please fill the input field"

                setTimeout(()=>{
                    this.error = ""
                }, 2000)
            }
        },
        updateNewTodo(event) {
            this.$emit('update:newTodo', event.target.value);
        }
    }
}

</script>

<style scoped>

.error {
    color: red;
    padding: 0 8px;
    font-weight: 700;
}
    form {
        border-radius:8px;
        border: 2px solid #585252;
        overflow: hidden;
    }
    form button,
    form input {
        font-size: 2rem;
        padding: 4px 12px;
        border:none;
    }
    form input:focus,
    form input:active,
    form input:hover {
        border:none;
        outline: none;
    }
    form input {
        width:75%;
        padding-left: 8px;
    }

    form button {
        width:25%;
        background-color: #818cf8;
        color:#fff;
    }
    
    form button:hover {
        cursor: pointer;
        background-color: #6366f1;
    }
</style>