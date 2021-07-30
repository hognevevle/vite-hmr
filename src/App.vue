<template>
  <suspense>
    <template #default><HelloWorld /></template>
    <template #fallback v-if="!error"> Loading </template>
  </suspense>
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from "vue"
import HelloWorld from "./components/HelloWorld.vue"

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    const error = ref(false)
    onErrorCaptured(() => {
      console.log("got error")
      error.value = true
    })

    return { error }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
