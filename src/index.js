import App from './app.vue';

const vueApp = Vue.createApp(App)

vueApp.use(ElementPlus);
vueApp.mount('#app');