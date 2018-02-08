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


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {
    	path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
    	path: '/show',
      name: 'ShowBlogs',
      component: ShowBlogs
    },
    {
    	path: '/test',
      name: 'Test',
      component: Test
    },
    {
    	path: '/list',
      name: 'ListBlog',
      component: ListBlog
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
      component: SingleBlog
    }
  ]
})
