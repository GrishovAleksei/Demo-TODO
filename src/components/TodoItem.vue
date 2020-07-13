<template>
  <li>
    <span>
      <input type="checkbox" v-model="todo.checked">
      <strong class="index">{{ index + 1 }}</strong>
      <div class="title" :class="{done: todo.checked}">{{todo.title}}</div>
      <button 
        @click="$emit('remove-todo', todo.id)"
      >
        &times;
      </button>
    </span>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>

<style lang="scss" >
  button {
    margin: auto;
    height: 25px;
  }
  .index{
    margin: auto;
  }
  .title {
    display: flex;
    align-items: center;
    width: 370px;
    font-size: 14px;
    height: 40px;
    overflow: hidden;
    border: none;
  }
  .done {
    text-decoration: line-through;
  }
</style>