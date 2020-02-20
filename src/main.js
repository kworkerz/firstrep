import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

// Filters

Vue.filter('uppercase', str => str.toUpperCase())

export const eventBus = new Vue()

new Vue({
	render: h => h(App),
	store,
	router
}).$mount('#app')