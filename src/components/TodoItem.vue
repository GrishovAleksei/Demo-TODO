<template>
  <li>
    <span :class="{done: todo.completed}" type="checkbox">
      <input type="checkbox" 
        @change="todo.checked = !todo.checked">
      <strong>{{ index + 1 }}</strong>
      {{todo.title}}
    </span>
    <button 
      @click="$emit('remove-todo', todo.id)"
    >
      &times;
    </button>
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

<style scoped>
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
</style>