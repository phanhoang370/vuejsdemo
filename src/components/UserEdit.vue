import { eventBus } from '../main'
<template>
    <div class="component">
        <h3>Edit User</h3>
        <p>Tuoi cua toi:{{ userAge }} </p>
        <button @click="editAge">Thay doi</button>
    </div>
</template>

<script>
    /* eslint-disable indent */

    export default {
        props: ['userAge'],
        methods: {
            editAge() {
                this.userAge += 1
                //this.$emit('ageWasEdited', this.userAge)
                eventBus.$emit('ageWasEdited', this.userAge)
            }
        }
    }
</script>
<style scoped>
    h3 {
        color:red;
    }
</style>