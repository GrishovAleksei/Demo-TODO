.<template>
  <div>
    <span :class="{done: todo.completed}" type="checkbox">
      <input type="checkbox" value="{todo.completed}">
      <strong>{{ index + 1 }}</strong>
      {{todo.title}}
    </span>
  </div>
</template>

<script>
export default {
  props: ["todo"]

}
</script>

<style>
  .done {
    text-decoration: line-through;
  }
</style>