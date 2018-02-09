
<template>
    <div>
        <slot name="top"></slot>
        <h1>form helper</h1>
        <slot name="down"></slot>
        <h1>please fill out form</h1>
        <form action="" method="get" accept-charset="utf-8">
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-fields">
                <slot name="form-fields"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="userful-links">
                <ul>
                    <li><a href="#">link 1</a></li>
                    <li><a href="#">link 2</a></li>
                    <li><a href="#">link 3</a></li>
                    <li><a href="#">link 4</a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
// import {eventBus} from '../main.js';
    export default {
 
    }
</script>
<style scoped>
    #userful-links ul li{
        display: inline-block;
    }
</style>