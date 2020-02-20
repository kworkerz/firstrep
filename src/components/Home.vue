<template>
    <div id="profile-form">
        <div id="home">
            <h1>Home Page</h1>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Home",
        computed: mapGetters([
            'title'
            ])
    }
</script>

<style scoped> </style>
