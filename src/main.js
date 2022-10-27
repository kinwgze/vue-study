// 主要职责：创建一个vue应用
// 1. 导入createApp函数，从vue中
// 2. 创建一个跟组件App.vue，导入至main
// 3. 使用createApp创建应用实例
// 4. 应用实例挂载到#app容器中


import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App)
app.mount('#app')

