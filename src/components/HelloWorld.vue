<template>
  <div class="hello">{{ foo.foo }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, reactive, onMounted, watch } from "vue"
import { SomeType } from "../types"

const foo: SomeType = {
  foo: "bar",
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  async setup() {
    return { foo }
  },
})
</script>
