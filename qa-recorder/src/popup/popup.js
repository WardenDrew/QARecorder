import Vue from 'vue';
import vuetify from '../plugins/vuetify';
import App from './App';
import store from '../store';

/* eslint-disable no-new */
new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');
