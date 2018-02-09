// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import firebase from'firebase'
 
Vue.use(Vuetify)


Vue.use(VueResource);
Vue.use(VueRouter);
// const routers = new VueRouter({
// 	routes:router,
// 	mode:'history'
// });
Vue.config.productionTip = false




	let app;
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBE3eU40Lg6urs_NtLaKe0celliE7s2PhI",
    authDomain: "my-project-1513958937837.firebaseapp.com",
    databaseURL: "https://my-project-1513958937837.firebaseio.com",
    projectId: "my-project-1513958937837",
    storageBucket: "my-project-1513958937837.appspot.com",
    messagingSenderId: "532356216650"
  };

  firebase.initializeApp(config);
window.firebase=firebase;

//customer directive
// Vue.directive('rainbow', {
// 	bind(el, binding, vnode){
// 		el.style.color="#" + Math.random().toString().slice(2,8);
// 	}
// });
Vue.directive('theme', {
	bind(el, binding, vnode){
		if(binding.value =='wide'){
			el.style.maxWidth="1200px";
		}else if(binding.value == 'narrow'){
				el.style.maxWidth="800px";
		}
		if(binding.arg == 'column'){
			el.style.background="#ddd";
			el.style.padding="20px";
		}
	}
});
//filters
// Vue.filter('to-uppercase', function(value){
// 	return value.toUpperCase();
// });
Vue.filter('snippet', function(value){
	return value.slice(0, 100);
});


export const eventBus = new Vue()
/*Vue.component('app-demo', Test);*/
/* eslint-disable no-new */

firebase.auth().onAuthStateChanged(function(user){
	if(!app){

		new Vue({
		  el: '#app',
		  router:router,
		  components: { App },
		  mode:'history',
		  template: '<App/>',
		    data: {
		        message: 'Welcome to Codementor!',
		        test: 'Welcome to Test!',
		    }
		})

	}
})



