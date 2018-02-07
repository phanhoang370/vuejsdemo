
<template>
    <header>
        <h1 v-on:click="changeTitle">{{title}}</h1>
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
                title:'View Demo'
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
    }
</style>