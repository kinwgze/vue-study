<!--watch函数，是用来定义侦听器的
监听ref定义的响应式数据

监听多个响应式数据数据

监听reactive定义的响应式数据

监听reactive定义的响应式数据，某一个属性

深度监听

默认执行-->
<template>
  <div class="container">
    <div>
      <p>count: {{ count }}</p>
      <button @click="add">add</button>
    </div>
    <hr>
    <div>
      <p>name: {{ obj.name }}</p>
      <p>age: {{ obj.age }}</p>
      <p>age: {{obj.brand.name }}</p>
      <button @click="updateName">updateName</button>
      <button @click="updateBrandName">updateBrandName</button>
    </div>
  </div>
</template>
<script>
import {reactive, ref, watch} from "vue";

export default {
  name: 'App',
  setup() {

    // 当需要监听数据的变化，可以使用watch
    // 1.监听ref
    // watch有两个参数，第一个参数：监听的目标；第二参数：改变后触发的函数
    const count = ref(0)
    const add = () => {
      count.value++
    }
    watch(count, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })

    // 2.监听reactive函数
    const obj = reactive({
      name: 'ls',
      age: 14,
      brand: {
        id: 1,
        name: 'bmw'
      }
    })
    const updateName = () => {
      obj.name = 'zs'
    }
    const updateBrandName = () => {
      obj.brand.name = 'tesla'
    }
    watch(obj, (newValue, oldValue) => {
      console.log("数据改变了")
    })

    watch(() => obj.brand, () => {
      console.log("brand数据变了")
    }, {
      deep: true
    })

    /*    // 3.监听多个响应式数据的变化
        watch([count, obj], () => {
          console.log("多个数据的变化")
        })*/

    /*    // 4.只监听obj.name数据的变化----只监听对象中某一个属性的变化
        // 需要写成函数返回该属性的形式才能监听到
        watch(() => obj.name, () => {
          console.log("name单独改变了")
        })*/



    return {count, add, obj, updateName, updateBrandName}
  }
}
</script>
