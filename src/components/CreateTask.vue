  <template>
    <div class='create_form'>
      <h2>Create task</h2>
      <form @submit.prevent="submitTask">
        <input type='text' placeholder="Type task" v-model='title' required>
        
        <AddTodo
          @add-todo="addTodo"
          :key="addTodoUpdateKey"
        />
        <TodoList
          v-if="todos.length"
          :todos="todos"
          @remove-todo="removeTodo"
        />
        <p v-else>No todos.</p>
        <input type="submit" value="Save">
      </form>
    </div>
    
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  data() {
    return {
      todos: [],
      title: '',
      addTodoUpdateKey: 0
    }
  },
  components: {
    TodoList,
    AddTodo
  },
  methods: {
    submitTask() {
      const title = this.title
      const todos = this.todos
      this.$emit('submit-handler', title, todos)

      this.title=''
      this.todos=[]
      this.addTodoUpdateKey++
    },
    addTodo(todo) {
      this.todos.push(todo)
    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  }
}
</script>

<style lang="scss">
  
</style>