<template>
  <div class='form'>
    <h2>Create task</h2>
    <form @submit.prevent="submitHandler">
      <input type='text' placeholder="Type task" id='title' v-model='title' required>
      
      <AddTodo
        @add-todo="addTodo" 
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
      // counter: 0,
    }
  },
  components: {
    TodoList,
    AddTodo
  },
  methods: {
    // increment: () => {
    //   this.counter += 1
    //   this.$emit('increment')
    // },
    submitHandler() {
      // this.increment
      let taskTitle = this.title,
          todos = this.todos
          //const id = this.counter
      console.log(taskTitle)
      console.log(todos)
      // console.log(id)
      this.$parent.$data.base.push()
      // localStorage.setItem("myBase", JSON.stringify(this.$parent.$data.base))
      
      this.title=''
      this.todos=[] 
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
  .form{
    font-family: 'Open Sans Condensed';
    width: 500px;
    padding: 30px;
    background: #FFFFFF;
    margin: 50px auto;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
    -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.22);
  }
  .form h2{
    background: #333;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', sans-serif;
    color: #ddd;
    font-size: 18px;
    font-weight: 100;
    padding: 20px;
    margin: -30px -30px 30px -30px;
  }
  .form input[type="text"]
  {
    box-sizing: border-box;
    outline: none;
    display: block;
    width: 100%;
    padding: 7px;
    border: none;
    border-bottom: 1px solid #ddd;
    background: transparent;
    margin-bottom: 10px;
    font: 16px Arial, Helvetica, sans-serif;
    height: 45px;
  }
  .form input[type="checkbox"] {
    margin-bottom: 10px;
    height: 14px;
  }
  .form span{
    overflow: hidden;
  }
  .form input[type="submit"]{
    margin-top:10px;
    box-shadow: inset 0px 1px 0px 0px #45D6D6;
    background-color: #2CBBBB;
    border: 1px solid #27A0A0;
    display: inline-block;
    cursor: pointer;
    color: #FFFFFF;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 14px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: capitalize;
  }
  .form input[type="submit"]:hover {
    background:linear-gradient(to bottom, #34CACA 10%, #30C9C9 100%);
    background-color:#34CACA;
  }
</style>