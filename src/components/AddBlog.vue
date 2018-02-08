
<template>
    <div id="add-blog">
        <h2>add a new blog post</h2>
        <form v-if="!submitted" action="AddBlog_submit" method="get" accept-charset="utf-8">
            <label>blog title</label>
            <input type="text" v-model.lazy="blog.title" required name="">
            <label>blog content:</label>
           <textarea name="" v-model="blog.content" ></textarea>
           <div id="checkbox">
            <label>php</label>
            <input type="checkbox" v-model="blog.categories"  value="php">
            <label>javascrip</label>
            <input type="checkbox" v-model="blog.categories"  value="javascrip">
            <label>ruby</label>
            <input type="checkbox" v-model="blog.categories"  value="ruby">
           </div>
           <label>Author:</label>
           <select v-model="blog.author">
               <option v-for="author in authors">{{author}}</option>      
           </select>
           <button v-on:click.prevent="post" type="">add blog</button>
        </form>
        <div v-if="submitted">
            <h3>thanks for post</h3>
        </div>
        <div id="preview">
            <h3>preview blog</h3>
            <p>blog title:{{blog.title}}</p>
            <p>blog content:{{blog.content}}</p>
            <p>blog categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
            <p>result select: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
import FormHelper from './FormHelper.vue';
    export default {
        data(){
            return {
                blog: {
                    titke:"",
                    content:"",
                    categories:[],
                    author:""
                },
                authors:['Php', 'c#', 'javascrip'],
                submitted:false,
            }
        }, methods:{
            post:function(){
                this.$http.post('https://my-project-1513958937837.firebaseio.com/posts.json', this.blog
                // {
                //     title:this.blog.title,
                //     body:this.blog.content,
                //     userId:1
                // }
                ).then(function(data){
                    console.log(data);
                    this.submitted=true;
                });
            }
        }
    }
</script>
<style scoped>
  label {
    display: block;
    margin: 20px 0 10px;
  }
  #add-blog {
    margin: 20px auto;
    max-width: 500px;
  }
  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  #checkbox label {
    display: inline-block;
  }
</style>