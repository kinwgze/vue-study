<template>
  <div class="container">
    根组件
  </div>
</template>
<script>
import {onBeforeMount, onMounted} from "vue";

export default {
  name: 'App',
  setup: function () {
    // DOM渲染前钩子
    onBeforeMount(() => {
      console.log('before', document.querySelector('.container'))
    })
    // DOM渲染后钩子
    onMounted(() => {
      console.log('after', document.querySelector('.container'))
    })
    // 定义多个相同的钩子函数，去实现不同的逻辑
    onMounted(() => {
      console.log('after2', document.querySelector('.container'))
    })

  }
}
</script>
