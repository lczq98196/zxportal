import Vue from 'vue'
import App from './App.vue'
import router from './router'
import element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
import Vut from "./lib/VueUseTest.js"
import axios from "axios"
import qs from "qs"
//import $ from "jquery"
import {getAxiosJsonResAsync,url} from "./lib/GetAxios"

import padTitle from "@/components/PadTitle.vue"
import inner from "@/components/Inner.vue"
import banner from "@/components/TopImage.vue"
Vue.component("padTitle",padTitle);
Vue.component("inner",inner);
Vue.component("banner",banner);

Vue.use(Vut)
Vue.config.productionTip = false
Vue.use(element);

//this.$http.get();
Vue.prototype.$http = axios;
Vue.prototype.$qs = qs;
Vue.prototype.$getJsonResAsync = getAxiosJsonResAsync;
Vue.prototype.url = url;
new Vue({
  //el:"#app",
  router,
  render: h => h(App)
}).$mount('#app')
