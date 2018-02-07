
<template>
    <footer>
        <h1>{{copyright}} {{title}}</h1>
    </footer><!-- /header -->
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
                copyright:'Copyright 2017 Vue dEMO'
            }
        },
        created() {
            eventBus.$on('titleChange', (data)=>{
                this.title=data;
            })
        }

    }
</script>
<style scoped>
    footer {
        background: yellow;
    }
    h1 {
        color: blue;
    }
</style>