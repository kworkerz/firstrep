<template>
    <div id="profile-form">
        <div>
            <label for="name">Name</label>
            <input type="text" v-model="name" id="name">
        </div>
        <div>
            <label for="surname">Surname</label>
            <input type="text" v-model="surname" id="surname">
        </div>
      <div>
            <label for="aboutMe">AbotMe</label>
            <input type="text" v-model="AboutMe" id="aboutMe">
        </div>

        <div>
            <button class="btn btn-blue" @click="save">Save</button>
            <button class="btn btn-blue" @click="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "../../main"

    export default {
        props: {
          user: {
            type: Object,
            required: true
          }
        },        
        name: 'ProfileForm',
        
        data() {
            return {
                name: '',
                surname: ''
            }
        },
        methods: {
            save() {
                let name = this.name
                let surname = this.surname
                let aboutMe = this.aboutMe
                this.$emit('save-user', {name, surname, aboutMe})
                eventBus.$emit('show-notify', {
                    message: 'User saved',
                    status: 'Success'
                })
                this.cancel()
            },
            cancel() {
                this.$emit('cancel')
            }
        },
        created() {
            this.name=this.user.name;
            this.surname=this.user.surname;
            this.aboutMe=this.user.aboutMe;
        }
    }
</script>


<style scoped> </style>

