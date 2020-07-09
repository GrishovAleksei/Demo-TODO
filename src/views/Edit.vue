<template>
  <div class='form'>
    <form>
      <h2>{{ id  }}</h2>
      <h2 contentEditable="true" v-modal="taskTitle">{{ task.title}}</h2>
      <AddTodo 
        @add-todo="AddTodo"
      />
      <ul v-for="(todo, i) in this.todosTemp" :key="i">
        <li>
          <span type="text" :class="{done: todo.completed}">
            <strong>{{ i + 1 }}</strong>
            <div contentEditable="true">
              {{todo.title}}
            </div>
              <input v-if="todo.completed" type="checkbox" checked/>
              <input v-else type="checkbox"/>
            
            
          </span>
          <button @click="() => removeTodo(i)">
            &times;
          </button>
        </li>
      </ul>
      <router-link 
        :to="{ name: 'List', params: {title: this.taskTitle,
                                      todos: this.todos, id: id}}"
      >
        <input type="submit" value="Save"
          @submit="submitHandler"
        />
      </router-link>
    </form>
  </div>
</template>
<script>
import AddTodo from "@/components/AddTodo"
export default {
  data() {
    return {
      // base: this.$route.params.base,
      todosTemp: this.base[this.id].todos,
      taskTitle: '',
    }
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
    // submitHandler() {
    //   const title = this.taskTitle
    //   const todos = this.todos
    //   router.push({ name: 'user', params: { userId: 123 }})
    //   this.$parent.$data.base[this.id].push({ title, todos })
    //   // localStorage.setItem("myBase", JSON.stringify(this.$parent.$data.base))
    //   this.title=''
    //   this.todos=[] 
    // },
  },


 
}
</script>

<style>

</style>