<template>
  <div class="container">
    <div>{{obj.name}}</div>
    <div>{{obj.age }}</div>
    <button @click="updateName">update</button>
  </div>
</template>
<script>
import {reactive} from "vue";

export default {
  name: 'App',
  setup() {
    // // 普通数据
    // const obj = {
    //   name : 'li',
    //   age : '18'
    // }

    // 响应式数据
    const obj = reactive({
        name : 'li',
        age : '18'
    })
    // 修改名字
    const updateName = () => {
      console.log('updateName')
      obj.name = 'ze'
    }
    return {obj, updateName}
  }
}
</script>