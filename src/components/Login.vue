
<template>
    <div class="container">
        
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="form">
        <fieldset class="row">
            <div class="col-md-6 col-md-offset-3">
                <legend>Login</legend>

        <label for="username">Username</label>
        <input id="mail" v-model="mail" type="mail" placeholder="Mail">

        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" placeholder="Password">

        <button type="submit" v-on:click="login" class="pure-button pure-button-primary">Login</button>
        <p>register <router-link to="/signup">register</router-link></p>
            </div>
        </fieldset>
</form>
    </div>
</template>

<script>
 import firebase from 'firebase'
export default {
    name:'login',
    data() {
        return {
            mail:'',
            password:''
        }
        
    },
    methods:{
        
        // doLogin: function() {
        //   this.submitData = this.user;
        // },
        login:function(){
            firebase.auth().signInWithEmailAndPassword(this.mail, this.password).then(function(user){
                alert('well done')
            },
            function(err){
                alert('oops' + err.message)
            }
            );
        }
    },
   
}
</script>
<style scoped>
    
</style>