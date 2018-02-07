<template>
    <div class="component">
        <p>Ten toi la {{ name }}</p>
        <p>Toi nam nay {{ age }} tuoi</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-detail v-bind:age="age"></app-user-detail>
                <button @click="resetAge">Reset tuoi</button>
            </div>
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-edit :user-age="age" @ageWasEdited="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue'
    import UserEdit from './UserEdit.vue'

    export default {
        data: function () {
            return {
                name: 'Duy',
                age: 23
            };
        },
        methods: {
            resetAge () {
                this.age = 23
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
<style scoped>
    p {
        color:green;
    }
</style>