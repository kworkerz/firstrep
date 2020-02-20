<template>
    <div id="app">
        <div class="bg-green-500 font-bold"><h2>Hello, {{ user.name | uppercase }}</h2></div>

        <notification
          v-if="showNotify"
          :message="notify.message"
          :status="notify.status"
          @cancel="showNotify = false">
          </notification>

        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <user-profile
          :user="user"
          @save-user="user = $event">
        </user-profile>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import UserProfile from './components/user/profile.vue'
    import Notification from './components/Support/Notification.vue'
    //import {eventBus} from '../main'
    import Notifier from './mixins/notifier.js'
  //import VueRouter from 'vue-router'
  //Vue.use(VueRouter)

    export default {
    name: 'app',
    mixins: [Notifier],
    components: {
    UserProfile, HelloWorld, Notification
  },
  data() {
    return {
      user: {
        name: 'John',
        surname: 'Doe',
        aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sapiente dignissimos esse, animi? Magni deserunt eaque inventore aliquam laboriosam, blanditiis cumque sint minus possimus. Omnis adipisci fuga voluptatibus distinctio optio esse! Consequatur inventore fugiat, repellat animi nulla deleniti quia. Ab nesciunt, iusto veniam maxime aspernatur voluptatum accusantium, culpa nihil quidem tempora minima. Sed officia magni ipsam ipsum nisi assumenda quos placeat quaerat amet perferendis, libero delectus facilis nesciunt at eveniet architecto obcaecati sint soluta, accusamus dignissimos nulla rerum nemo, id. Rem sequi suscipit voluptate voluptas quo quaerat distinctio, assumenda magni necessitatibus, nam error, officiis id quisquam molestiae consequatur eveniet eum.'
      }
    }
}
}
</script>

<style src="./assets/css/tailwind.css"></style>