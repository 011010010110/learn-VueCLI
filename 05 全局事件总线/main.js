import Vue from 'vue'
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this  //在生命周期beforeCreate以前安装全局事件总线，此处this指向Vue实例
  },
}).$mount('#app')
