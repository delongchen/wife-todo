<template>
  <div>
    <p>{{ info.title }}</p>
    <ul v-if="info.children">
      <todo-cell
        v-for="(v, k) in info.children"
        :key="k"
        :info="v"/>
    </ul>
  </div>
</template>

<script>
import { TodoCell as C } from "@/components/TodoList/data";

export default {
  name: "TodoCell",
  props: {
    info: {
      type: C,
      required: true
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>
