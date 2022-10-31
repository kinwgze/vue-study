<template>
  <div class="container">
    我是根组件
    <h2 @click="say()">{{msg}}</h2>
  </div>
</template>
<script>
export default {
  name: 'App',
  // 1. 组合API的起点，基本上所有的组合api代码都在里面写
  // 2. 在组件实例创建前执行
  // 3. setup中不能用this，此时的this是undefined
  // 4. 模板中需要使用的数据和函数，需要在setup中返回
  setup () {
    console.log(this)
    const msg = 'hello vue3'

    const say = () => {
      console.log('hello vue3.2')
    }
    return {msg , say}

  }
}
</script>
