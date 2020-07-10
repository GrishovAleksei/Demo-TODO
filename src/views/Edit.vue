<template>
  <div class='form'>
    <form>
      <h2 contentEditable="true" id="title">{{ task.title}}</h2>

      <AddTodo @add-todo="addTodo"/>
      
      <ul v-for="(todo, i) in this.todosTemp" :key="i" >
        <li>
          <span type="text" :class="{done: todo.completed}">
            <strong>{{ i + 1 }}</strong>
            <a contentEditable="true" :id="i"
              @click.prevent="()=>edited.push(i)"> {{ todo.title }} </a>
            <input v-model="todo.checked" type="checkbox"/>
          </span>
          <button @click.prevent="() => removeTodo(todo.id)">
            &times;
          </button>
        </li>
      </ul>
      <router-link :to="{ name: 'List' }">
        <input @click="saveChanges" type="submit" value="Save"/>
      </router-link>
    </form>
  </div>
</template>
<script>
import AddTodo from "@/components/AddTodo"
export default {
  data() {
    return {
      todosTemp: this.base[this.id].todos.slice(),
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
      this.todosTemp.push(todo)
    },
    removeTodo(id) {
      this.todosTemp = this.todosTemp.filter(todo => todo.id !== id)
    },
    saveChanges() {
      let title = document.getElementById("title").innerText
      this.base[this.id].title = title
      let noRepetition = this.edited.filter((item, pos) => {
        return this.edited.indexOf(item) == pos;
      })
      
      noRepetition.forEach(index => {
        this.todosTemp[index].title = document.getElementById(index).innerText
      });
      console.log(this.todosTemp)
      
      this.base[this.id].todos = this.todosTemp
    },
  },
}
</script>

<style>

</style>