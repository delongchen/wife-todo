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
  }
}
</script>

<style scoped>

</style>
