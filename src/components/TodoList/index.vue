<template>
  <div>this is todos</div>
  <div>{{ DATA }}</div>
</template>

<script>
import { DATA } from "@/components/TodoList/data";

export default {
  name: "TodoList",
  setup() {
    return {
      DATA
    }
  }
}
</script>

<style scoped>

</style>