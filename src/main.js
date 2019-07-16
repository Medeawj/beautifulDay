// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import myaxios from './assets/js/myaxios.js'
import './assets/js/flexible.js'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
Vue.config.productionTip = false
Vue.prototype.myaxios = myaxios


Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 百度统计
router.beforeEach((to,from,next) => {
  var _hmt = _hmt || [];
  window._hmt = _hmt;
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?67e0621df67b368386c3fa610be6a837";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
  if(to.path){
    _hmt.push(["_trackPageview","/#" + to.fullPath]);
  } 
  next();
});

