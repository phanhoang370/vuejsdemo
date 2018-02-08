export default {
	computed:{
		filteredBlogs:function(){
                return this.blogs.filter((blog)=>{
                    //return boolean;
                    return blog.title.match(this.search);
                })
            }
	}
}