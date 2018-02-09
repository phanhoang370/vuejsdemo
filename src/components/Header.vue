
<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
        <div id="">
            <ul>
                <li><router-link to="/" exact>Home</router-link></li>
                <li><router-link to="/add" >Add</router-link></li>
                <li><router-link to="/show" >Show</router-link></li>
                <li><router-link to="/test" >Test</router-link></li>
                <li><router-link to="/list" >List</router-link></li>
            </ul>
            <button type="" class="logout" v-on:click="logout">Logout</button>
        </div>
    </header><!-- /header -->
</template>

<script>
import {eventBus} from '../main.js';
import firebase from 'firebase'
    export default {
        props:{
            title:{
                type:String
            }
        },
        data() {
            return {
                //title:'View Demo'
                msg:'welcome to your view'
            }
        },
        methods:{
            changeTitle:function(){
                this.title="change title";
                //this.$emit('changeTitle', 'chang title');
                eventBus.$emit('titleChange', 'change Title');
            }
            ,
            logout(){
                firebase.auth().signOut().then(() =>{
                    this.$router.replace('login')
                })
            }
        }

    }
</script>
<style scoped>
    header {
        background: lightgreen;
    }
    h1 {
        color: #222;
        margin-bottom: 10px;
    }
    .home {
        text-align: left;
    }
    ul {
        list-style-type: none;
        text-align: center;
        margin: 0;
        padding-bottom: 15px;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #fff;
        text-decoration: none;
        padding: 6px 8px;
        border-radius: 6px;
    }
    nav {

    }
    .router-link-active {
        background: #eee;
    }
    .logout {
        text-align: center;
    }
</style>