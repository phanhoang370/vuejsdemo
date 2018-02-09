import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowBlogs from '@/components/ShowBlogs'
import AddBlog from '@/components/AddBlog'
import Test from '@/components/Test'
import ListBlog from '@/components/ListBlog'
import FormOne from '@/components/FormOne'
import User from '@/components/User'
import SingleBlog from '@/components/SingleBlog'
import Login from '@/components/Login'
import SignUp from'@/components/SignUp.vue'
import firebase from 'firebase'


Vue.use(Router)
let router = new Router({
	
})

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
     
      name: 'Login',
      component: Login
    },
    // {
    //   path: '*',
    //   name: 'Login',
    //   component: Login
    // },
    {
    	path: '/add',
      name: 'AddBlog',
      component: AddBlog,
      meta:{
      	requiresAuth:true
      }
    },
    {
    	path: '/show',
      name: 'ShowBlogs',
      component: ShowBlogs,
      meta:{
      	requiresAuth:true
      }
    },
    {
    	path: '/test',
      name: 'Test',
      component: Test
    },
    {
    	path: '/list',
      name: 'ListBlog',
      component: ListBlog,
      meta:{
      	requiresAuth:true
      }
    },
    {
    	path: '/form-one',
      name: 'FormOne',
      component: FormOne
    },
    {
    	path: '/user',
      name: 'User',
      component: User
    },
    {
    	path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog,
      meta:{
      	requiresAuth:true
      }
    }
    ,
    {
    	path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
router.beforeEach((to, from, next)=>{
	let currentUser=firebase.auth().currentUser;
	let requiresAuth=to.matched.some(record => record
		.meta.requiresAuth);

	if(requiresAuth && !currentUser) next('login')
		else if (!requiresAuth && currentUser) next('hello')
			else next()
})