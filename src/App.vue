<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-heder v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-heder>
    <router-view/>
    <app-tests v-bind:ninjas="ninja"></app-tests>
    <form-helper>
      <h1 slot="top">insert tag slots top</h1>
      <h1 slot="down">insert tag slots down</h1>
      <div slot="form-header">
        <h3>this is the title of form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required value="">
        <input type="password" placeholder="password"required value="">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">handle Submit</button>
      </div>
    </form-helper>

  
    <keep-alive>
      <component v-bind:is="component"></component>
    </keep-alive>
    
    
    <button v-on:click="component='form-one'">Button form one</button>
    <button v-on:click="component='form-two'">Button form two</button>
      
     
    <app-footer v-bind:title="title"></app-footer>

  </div>
</template>




<script>
import User from './components/User.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Test from './components/Test.vue';
import FormHelper from './components/FormHelper.vue';
import FormOne from './components/FormOne.vue';
import FormTwo from './components/FormTwo.vue';
// import AddBlog from './components/AddBlog.vue';
// import ShowBlogs from './components/ShowBlogs.vue';
// import ListBlog from './components/ListBlog.vue';
    export default {
      data() {
            return {
                ninja: [
        {name: 'Ryu', specialty: 'Vue Components', show: false},
        {name: 'Crystal', specialty: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', specialty: 'Click Events', show: false},
        {name: 'Tango', specialty: 'Conditionals', show: false},
        {name: 'Kami', specialty: 'Webpack', show: false},
        {name: 'Yoshi', specialty: 'Data Diggin', show: false}
      ]﻿,
      title:'ahihi title',
      component:'form-two'
            }
            
        },
        components: {
            appUser: User,
            'app-heder':Header,
            'app-footer':Footer,
            'app-tests':Test,
            'form-helper':FormHelper,
            'form-one':FormOne,
            'form-two':FormTwo
            // 'add-blog':AddBlog,
            // 'show-blog':ShowBlogs,
            // 'list-blog':ListBlog
        }, 
        methods:{
          updateTitle(updateTitles){
            this.title=updateTitles;
          },
            handleSubmit:function(){
                alert('thanks for form form');
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
