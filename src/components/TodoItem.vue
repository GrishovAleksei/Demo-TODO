<template>
  <li>
    <span>
      <input type="checkbox" 
        @change="todo.checked = !todo.checked">
      <strong>{{ index + 1 }}</strong>
      {{todo.title}}
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

<style lang="scss">
  button {
    height: 25px;
  }
  // .done {
  //   text-decoration: line-through;
  // }

</style>