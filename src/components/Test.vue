
<template>
    <div id="test">
        
        <ul>
            <li v-for="test in ninjas" v-on:click="test.show =!test.show">
                <h1 >{{test.name}}</h1>
                <h3 v-show="test.show">{{test.specialty}}
                </h3>
            </li>
            
        </ul>
        <h1>{{title}}</h1>
        <button @click="deleteNinja">deleteNinja</button>
    </div>
</template>

<script>
    export default {
        props:{
            ninjas:{
                type:Array,
                required:true
            },
            title:{
                type:String
            }
        },
        methods:{
            deleteNinja:function(){
                this.ninjas.pop();
            },

        },
        //lifecycle hooks
        beforeCreate(){
            alert('beforeCreate');
        },
        created(){
            alert('created');
        },
        beforeMount(){
            alert('beforeMount');
        },
        mounted(){
            alert('mounted');
        },
        beforeUpdate(){
            alert('beforeUpdate');
        },
        updated(){
            alert('updated');
        }
    }
</script>
<style scoped>
    #test {
        width: 100%;
        margin: 40px auto;
        padding: 0 20px;
        max-width: 1200px;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }
    ul li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 1px solid #222;
        margin: 10px;
    }
</style>