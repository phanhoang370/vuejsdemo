
<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>all blog article</h1>
        <input type="text" v-model="search" placeholder="search blogs" name="">

        <div v-for="blog in filteredBlogs" class="single-blog">
            
            <router-link v-bind:to="'/blog/'+ blog.id"><h3>{{blog.title | to-uppercase}}</h3></router-link>
            <article>
                {{blog.content | snippet}}
            </article>
        </div>
    </div>
       
</template>

<script>
import SearchMixin from '../mixins/SearchMixin.js';
    export default {
        components:{
            
        }, 
        methods:{
            
        },
        data(){
            return{
                blogs:[],
                search:""
            }
        },
        created(){
            this.$http.get('https://my-project-1513958937837.firebaseio.com/posts.json').then(function(data){
                return data.json();
                //this.blogs=data.body.slice(0, 10);
            }).then(function(data){
                var blogsArray=[];
                for(let key in data){
                    data[key].id=key;
                    blogsArray.push(data[key]);
                }
                this.blogs=blogsArray;
            })
        }, computed:{
            // filteredBlogs:function(){
            //     return this.blogs.filter((blog)=>{
            //         //return boolean;
            //         return blog.title.match(this.search);
            //     })
            // }
        },
        filters:{
            // toUppercase:function(value){
            //     return value.toUpperCase();
            // }

            //WAY 2
            toUppercase(value){
                return value.toUpperCase();
            }
        },
        directives:{
            'rainbow':{
                bind(el, bind, vnode){
                    el.style.color="#" + Math.random().toString().slice(2,8);
                }
            }
        },
        mixins:[SearchMixin]
    }
</script>
<style scoped>
    #show-blogs {
        max-width: 800px;
        margin: 0 auto;
    }  
    .single-blog {
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
    
</style>