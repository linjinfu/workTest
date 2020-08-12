import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"
import eCharts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css' 
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = eCharts;
new Vue({
  render: h => h(App),
}).$mount('#app')
