import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"
import eCharts from 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router' 
import router from './router/index.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.prototype.$echarts = eCharts;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
