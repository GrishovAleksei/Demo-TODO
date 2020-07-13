<template>
  <div class='form'>
    <Modal
      v-show="visible"
      @close="closeModal"
      @confirm="deleteTask"
    />
    <CreateTask @submit-handler="submitHandler"/>
    <br>
    <div v-if="$parent.$data.base.length">
      <form class="list_form" v-for="(value, id) in $parent.$data.base" :key="id">
        <router-link 
          :to="{ name: 'Edit', params: {base: $parent.$data.base,
                                        id: id}}"
          @getConfirm="() => showDialog(id)"
        >
          <h2>
            {{ value.title }}
            <ion-icon class="icon" name="trash"
              @mouseenter="$event.target.style.color = '#999'"
              @mouseleave="$event.target.style.color = '#ddd'"
              @click.prevent="() => showDialog(id)"
            ></ion-icon>
          </h2>
        </router-link>

        <ul>
          <li v-for="(todo, i) in value.todos.slice(0,2)" :key="i">
            <span type="text">
              <strong class="index">{{ i + 1 }}</strong>
              <div :class="{done: todo.checked}" class="title">
                {{todo.title}}
              </div>
              <input v-model="todo.checked" type="checkbox" disabled/>
            </span>
          </li>
          <li v-if="(value.todos.length>2)">...</li>
        </ul>
        <br>
      </form>
    </div>
    <p v-else>You have no tasks!</p>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
import CreateTask from '@/components/CreateTask'

export default {
  data() {
    return {
      todos: [],
      title: '',
      visible: false,
      temp: '',
    }
  },
  components: {
    Modal,
    CreateTask
  },
  methods: {
    showDialog(id) {
      this.visible = true
      this.temp = id
    },
    closeModal() {
      this.visible = false
    },
    deleteTask() {
      this.closeModal()
      this.$parent.$data.base.splice(this.temp, 1)
      this.save()
      this.temp = ''
    },
    save() {
      localStorage.setItem("myBase", JSON.stringify(this.$parent.$data.base))
    },
    submitHandler(title, todos) {
      // const title = this.title
      // const todos = this.todos
      this.$parent.$data.base.push({ title, todos })
      this.save()
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
  .icon {
    position:absolute;
    font-size: 22px;
    margin-left: 240px;
    cursor: pointer;
  }
  .form{
    width: 500px;
    padding: 30px;
    background: #FFFFFF;
    margin: 20px auto;
    
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    -webkit-box-shadow:  0px 0px 20px rgba(0, 0, 0, 0.5);
    
    .create_form {
      width: 440px;
      padding: 30px;
      margin-bottom: 40px;
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
      -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
      -webkit-box-shadow:  0px 0px 15px rgba(0, 0, 0, 0.7);
    }
    .list_form {
      height: 220px;
    }
  }
  .form h2{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333;
    text-transform: uppercase;
    color: #ddd;
    font-size: 18px;
    font-weight: 100;
    padding: 15px;
    margin: -30px -30px 30px -30px;
  }
  input[type="text"]
  {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
    background: transparent;
    font-size: 16px;
    height: 50px;
    overflow: hidden;
  }
  span{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
  }
  input[type="checkbox"] {
    margin: auto;
  }
  .form input[type="submit"]{
    width: 100%;
    margin-top: 10px;
    height: 50px;
    box-shadow: inset 0px 1px 0px 0px #45D6D6;
    background-color: #2CBBBB;
    border: 1px solid #27A0A0;
    display: inline-block;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
  }
  .form input[type="submit"]:hover {
    background:linear-gradient(to bottom, #34CACA 10%, #30C9C9 100%);
    background-color:#34CACA;
  }
  .done {
    text-decoration: line-through;
  }
   
  
    
</style>