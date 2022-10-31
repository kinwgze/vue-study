<template>
  <div class="container">
    <div>{{name}}</div>
    <button @click="updateName">update</button>
  </div>
</template>
<script>
import {reactive, toRef} from "vue";

export default {
  name: 'App',
  setup () {
    // 响应式数据对象
    const obj = reactive({
      name : 'ls',
      age : '18'
    })
    // 模板中只需要使用name数据
    // 注意，从响应式数据对象中结构出的属性数据，不再是响应式数据了
    // let { name } = obj  不能直接结构，出来的会是一个普通数据
    // roRef转换响应式数据包装成对象，value存放值的位置
    const name = toRef(obj, 'name')
    console.log(name)
    const updateName = () => {
      console.log('updateName')
      name.value = 'zs'
    }

    return {name, updateName}
  }
}
</script>
