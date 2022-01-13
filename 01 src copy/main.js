import Vue from 'vue'
import App from './App.vue'
// import { MenuItemGroup, MenuItem} from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/global.css' /*公共样式 */
import plugins from './plugins'  /*引入插件 */


Vue.config.productionTip = false
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
Vue.use(ElementUI);
Vue.use(plugins, 123) /*使用插件 */

new Vue({
  render: h => h(App),
}).$mount('#app')
