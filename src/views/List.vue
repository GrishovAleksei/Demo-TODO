<template>
  <div class='form'>
    <!-- Input -->
    <!-- <AddTask @submit-handler="submitHandler"/> -->
    <div class='form'>
      <h2>Create task</h2>
      <form @submit.prevent="submitHandler">
        <input type='text' placeholder="Type task" v-model='title' required>
        
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
    <br>

    <!-- List -->
    <form v-for="(value, id) in $parent.$data.base" :key="id">
      <router-link 
        :to="{ name: 'Edit', params: id}"
      >
       <h2>
          {{ value.title }}
          <ion-icon class="trash" name="trash"
            @mouseenter="$event.target.style.color = '#999'"
            @mouseleave="$event.target.style.color = '#ddd'"
            @click.prevent="() => deleteTask(index)"
          ></ion-icon>
        </h2>
      </router-link>
      <ul v-for="(todo, i) in value.todos.slice(0,2)" :key="i">
        <li>
          <span type="text">
            <strong>{{ i + 1 }}</strong>
            {{todo.title}}
            <input v-if="todo.completed" type="checkbox" checked disabled/>
            <input v-else type="checkbox" disabled/>
          </span>
        </li>
      </ul>
      <br>
    </form>
  </div>
</template>
<script>

// import AddTask from '@/components/AddTask'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
export default {
  data() {
    return {
      todos: [],
    }
  },
  components: {
    // AddTask,
    TodoList,
    AddTodo,
  },
  methods: {
    deleteTask(id) {
      this.$parent.$data.base.splice(id, 1)
      localStorage.setItem("myBase", JSON.stringify(this.$parent.$data.base))
    },
    submitHandler() {
      const title = this.title,
            todos = this.todos
            
      this.$parent.$data.base.push({title, todos})
      localStorage.setItem("myBase", JSON.stringify(this.$parent.$data.base))
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
  .choosed {
    li {
      margin-bottom: 5px;
      border:1px solid #ccc;
      display: flex;
      justify-content: space-between;
    }
    .done {
      text-decoration: line-through;
    }
    input {
      margin-right: 1rem;
      position: static; 
    }
  }
  ul{
    list-style-type: none;
    padding-left:10px
    
  }
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
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed', sans-serif;
    color: #ddd;
    font-size: 18px;
    font-weight: 100;
    padding: 15px;
    margin: -30px -30px 0px -30px;
  }
  .form span[type="text"]
  {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
    background: transparent;
    padding-bottom: 0px;
    font: 16px Arial, Helvetica, sans-serif;
    height: 60px;
    overflow: hidden;
  }
  .form input[type="checkbox"] {
    margin-bottom: 10px;
    height: 14px;
  }
  ion-icon.trash {
    position:absolute;
    font-size: 22px;
    margin-left: 240px;
    cursor: pointer;
  }
    
</style>