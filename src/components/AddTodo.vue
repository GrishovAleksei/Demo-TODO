<template>
  <form @submit.prevent="onSubmit">
    <input class="input-text" type="text" placeholder="Type todo"
      v-model="title" ref="addTitle">
    <button type="submit">Add</button>
  </form>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    methods: {
      onSubmit() {
        if (this.title.trim()) {
          const newTodo ={
            id: Date.now(),
            title: this.title,
            checked: false
          }
          this.$emit('add-todo', newTodo)
          this.title=''
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  button {
    margin: 10px 10px;
    box-shadow: inset 0px 1px 0px 0px #666;
    background-color: #333;
    border: 1px solid #222;
    // display: inline-block;
    cursor: pointer;
    color: #ddd;
    font-size: 14px;
    padding: 5px 20px;
    text-decoration: none;
    text-transform: uppercase;
  }
  button:hover {
    background:linear-gradient(to bottom, #666 10%, #222 100%);
  }
</style>