<template>
  <div class='form'>
    <form>
      <h2>{{ taskId  }}</h2>
      <h2>{{ task.title}}</h2>
      <AddTodo/>
      <ul v-for="(todo, i) in task.todos" :key="i">
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
      taskId: this.$route.params.id,
      base: this.$route.params.base,
      todosTemp: []
    }
  },
  computed: {
    task() {
      return this.base[this.taskId]
    }
  },
 
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