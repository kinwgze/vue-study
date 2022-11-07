<template>
  <div class="container">
    <div>{{name}}</div>
    <div>{{age}}</div>
  </div>
</template>
<script>
import {ref} from "vue";

export default {
  name: 'App',
  setup() {
    const name = ref('ls')
    console.log(name)
    const age = ref(10)

    // ref常用于定义简单数据类型的响应式数据，也可以定义复杂类型的响应式数据
    // 当要定义的响应式数据类型未知时，使用ref
    const data = ref(null)
    return {name, age}
  }
}
</script>
