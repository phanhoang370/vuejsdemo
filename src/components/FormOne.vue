
<template>
    <div>
        <form-helper>
      <div slot="form-header">
        <h3>Form one Login</h3>
        <p>Enter your detail login</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required value="">
        <input type="password" placeholder="password"required value="">
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">handle Submit</button>
      </div>
    </form-helper>
    </div>
</template>

<script>
import {eventBus} from '../main.js';
import FormHelper from './FormHelper.vue';
    export default {
        components:{
            'form-helper':FormHelper
        }, methods:{
            handleSubmit:function(){
                alert('thanks for form one');
            }
        }
    }
</script>
<style scoped>
    #userful-links ul li{
        display: inline-block;
    }
</style>