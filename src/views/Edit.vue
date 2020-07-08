<template>
  <div class='form'>
    <form >
      <h2>{{this.$route.params.title}}</h2>
      
      <ul v-for="(todo, i) in this.$route.params.todos" :key="i">
        <li>
          <span type="text" :class="{done: todo.completed}">
            <strong>{{ i + 1 }}</strong>
            {{todo.title}}
            <input v-if="todo.completed" type="checkbox" checked/>
            <input v-else type="checkbox"/>
          </span>
          <button @click="() => removeTodo(i)">
            &times;
          </button>
          
        </li>
        
      </ul>
      <AddTodo/>
      <input type="submit" value="Save"
        @submit="submitHandler"
      />
    </form>
  </div>
</template>
<script>
import AddTodo from "@/components/AddTodo"
export default {
  data() {
    return {
      todosTemp: []
    }
  },
  // title : this.$route.params.title,
  // todos : this.$route.params.todos,
  components: {
    AddTodo,
  },
  methods:{
    addTodo(todo) {
      this.todosTemp.push(todo)
    },
    removeTodo(id) {
      this.todosTemp = this.todosTemp.filter(t => t.id !== id)
    },
    submitHandler() {
      const taskTitle = this.title
      const todos = this.todosTemp
      this.$parent.$data.base.push({ taskTitle, todos })
      localStorage.setItem("myBase", JSON.stringify(this.$parent.$data.base))
      this.title=''
      this.todos=[] 
    },
  },


 
}
</script>

<style>

</style>