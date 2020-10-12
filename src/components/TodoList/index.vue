<template>
  <todo-cell :info="DATA"/>
</template>

<script>
import TodoCell from "@/components/TodoList/TodoCell";
import { DATA } from "@/components/TodoList/data";

export default {
  name: "TodoList",
  components: {TodoCell},
  data() {
    return {
      DATA
    }
  },
  created() {
    fetch('todos.json').then(value => {
      value.text().then(json => {
        console.log(json)
      })
    })
  }
}
</script>

<style scoped>

</style>
