
<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>
            {{blog.content}}
        </article>
        <p>author:{{blog.author}}</p>
        <ul>
            <li v-for="category in blog.categories">{{category}}</li>
        </ul>
    </div>
    
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.params.id,
                blog:{}
            }
        }, 
        created(){
            this.$http.get('https://my-project-1513958937837.firebaseio.com/posts/' + this.id + '.json').then(function(data){
                    return data.json();
                    //this.blog=data.body;
            }).then(function(data){
                this.blog=data;
            });

            
        }
    }
</script>
<style scoped>
    
</style>