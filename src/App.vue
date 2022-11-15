<template>
  <div class="container">
    <h1>父组件</h1>
    <p>{{money}}</p>
    <hr>
    <Son :money = "money"/>
  </div>
</template>
<script>
import Son from "./Son.vue";
import {ref} from "vue";
export default {
  name: 'App',
  components: {
    Son
  },
  // 父组件的数据传递为子组件
  setup() {
    const money = ref(100)
    return {money}
  }
}
</script>
