import Vue from 'vue'
import App from './App.vue'
import { VueHammer } from 'vue2-hammer'

Vue.config.productionTip = false

Vue.use(VueHammer);
VueHammer.config.swipe = {
  threshold: 100
};

new Vue({
  render: h => h(App),
}).$mount('#app')
