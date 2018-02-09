
<template>
    <div class="container">
        
    <form class="pure-form pure-form-stacked" v-on:submit.prevent="doLogin" id="form">
        <fieldset class="row">
            <div class="col-md-6 col-md-offset-3">
                <legend>Register</legend>

<!--         <label for="grant-type">grant_type</label>
        <input id="grant-type" v-model="user.grant_type" type="text" readonly>

        <label for="client-id">client_id</label>
        <input id="client-id" v-model="user.client_id" type="text" readonly> -->

        <label for="username">mail</label>
        <input id="mail" v-model="mail" type="mail" placeholder="Mail">

        <label for="password">Password</label>
        <input id="password" v-model="password" type="password" placeholder="Password">

        <button type="submit" v-on:click="signup" class="pure-button pure-button-primary">SignUp</button>
        <span>or go to back to<router-link to="/login">Login</router-link>.</span>
            </div>
        </fieldset>
</form>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name:'signUp',
    data() {
        return {
            mail:'',
            password:''
        }
        
    },
    methods:{
        
        doLogin: function() {
          this.submitData = this.user;
        },
        signup:function(){
            firebase.auth().createUserWithEmailAndPassword(this.mail, this.password).then(function(user){
                alert('your accout has been created')
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