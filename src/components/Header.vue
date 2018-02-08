
<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
        <div id="">
                <ul>
                    <li><router-link to="/" exact>Home</router-link></li>
                    <li><router-link to="/add" exact>Add</router-link></li>
                    <li><router-link to="/show" exact>Show</router-link></li>
                    <li><router-link to="/test" exact>Test</router-link></li>
                    <li><router-link to="/list" exact>List</router-link></li>
                </ul>
            </div>
    </header><!-- /header -->
</template>

<script>
import {eventBus} from '../main.js';
    export default {
        props:{
            title:{
                type:String
            }
        },
        data() {
            return {
                //title:'View Demo'
            }
        },
        methods:{
            changeTitle:function(){
                this.title="change title";
                //this.$emit('changeTitle', 'chang title');
                eventBus.$emit('titleChange', 'change Title');
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
</style>