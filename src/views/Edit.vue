<template>
  <div class='form'>
    <form>
      <h2 contentEditable="true" id="title">{{ this.todosTemp.title}}</h2>
      <input v-model="todosTemp.title"/>
      
      <AddTodo @add-todo="addTodo"/>
      
      <ul v-for="(todo, i) in this.todosTemp.todos" :key="i" >
        <li>
          <span type="text" :class="{done: todo.completed}">
            <strong>{{ i+1 }}</strong>
            <input v-model="todo.title"/>
            <input v-model="todo.checked" type="checkbox"/>
          </span>
          <button @click.prevent="() => removeTodo(todo.id)">
            &times;
          </button>
        </li>
      </ul>
      <router-link :to="{ name: 'List' }">
        <input @click="save" type="submit" value="Save"/>
      </router-link>
    </form>
  </div>
</template>
<script>
import AddTodo from "@/components/AddTodo"
export default {
  data() {
    return {
      todosTemp: {
        todos: this.base[this.id].todos.map(x => Object.assign({}, x)),
        title: this.base[this.id].title
      },
      edited: [],
    }
  },
  components: {
    AddTodo,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    base: {
      type: Array,
      required: true,
    },
  },
  computed: {
    task() {
      return this.base[this.id]
    }
  },
  methods:{
    addTodo(todo) {
      this.todosTemp.todos.push(todo)
    },
    removeTodo(id) {
      this.todosTemp.todos = this.todosTemp.todos.filter(todo => todo.id !== id)
    },
    save() {
      this.base[this.id].title = this.todosTemp.title
      this.base[this.id].todos = this.todosTemp.todos.map(x => Object.assign({},x))
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem("myBase", JSON.stringify(this.$parent.$data.base))
    }
  },
}
</script>

<style>

</style>