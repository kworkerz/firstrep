import VueRouter from 'vue-router'
import Home from './components/Home'
import UsersList from './components/user/List'

export default new VueRouter({

  routes: [
	{
		path: '', //http://localhost:800
		component: Home
	},
	{
		path: '/users', //http/ users
		component: UsersList
	},
	{
		path: '/users:id', //localhost :8080
	}
  ]

})