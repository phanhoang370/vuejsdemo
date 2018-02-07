import { eventBus } from '../main'
<template>
    <div class="component">
        <h3>User Details</h3>
        <p>Tuoi toi:{{ age }}</p>
        <button v-on:click="created">doi tuoi</button>
    </div>
</template>

<script>


    export default {
        props: ['age'],
        methods: {
            changeAge () {
                this.age = 24
                //this.$emit('ageWasUpdated', this.age)
                eventBus.$emit('changeAge', this.age)
            },
            created () {
                eventBus.$on('created', (age) => {
                    this.age = 24
                })
            }
            
        },

    }
</script>