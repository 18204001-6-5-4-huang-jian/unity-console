import Vue from 'vue';
import Cookies from 'js-cookie'
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import http from '@/plugin/http'
import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/styles/style.css';

import './assets/js/global'

Vue.use(http);
Vue.use(ElementUI)
import filters from './filters/filter'; // 全局vue filter
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});


// 设置全局位置变量
if(window.location.href.indexOf('/wh')>-1){
  Vue.prototype.$location='wh'
  window.localStorage.setItem('$location','wh')
}else{
  Vue.prototype.$location=''
}

// if(!sessionStorage.getItem('token')){
//     router.push({path: "/login"});
//  }

Vue.config.productionTip = false;

// 生产环境错误日志
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function(err, vm) {
  };
}

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
