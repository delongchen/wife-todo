<template>
  <div>
    <p @click="killSelf" :style="{
      textDecoration: closed ? 'line-through' : 'none'
    }">{{ info.title }}</p>
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
      count: 0,
      closed: false
    }
  },
  methods: {
    killSelf() {
      this.closed = !this.closed
    }
  },
  created() {
    const { children } = this.info
    children && (this.count = children.length)
  },
  watch: {
    count(val) {

    }
  }
}
</script>

<style scoped>

</style>
