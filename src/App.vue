<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>

    <app-user></app-user>
    <app-heder v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-heder>
    <app-tests v-bind:ninjas="ninja"></app-tests>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>




<script>
import User from './components/User.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Test from './components/Test.vue';
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
      title:'ahihi title'
            }
        },
        components: {
            appUser: User,
            'app-heder':Header,
            'app-footer':Footer,
            'app-tests':Test
        }, 
        methods:{
          updateTitle(updateTitles){
            this.title=updateTitles;
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
