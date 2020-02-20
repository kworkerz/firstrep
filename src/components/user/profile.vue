<template>
<div id="user-profile">
	<h1>User Profile</h1>
	<p><strong>Name</strong> {{ user.name }}</p>
	<p><strong>Surname</strong> {{ user.surname }}</p>
	<p><strong>AboutMe</strong> {{ user.aboutMe | readMore(50, '...') }}</p>
	<div v-if="showForm">
		<profile-form :user="user"
					@save-user="saveUser($event)"
					@cancel="showForm=false">
		</profile-form>
	</div>
		<div v-else>
		  <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" @click="showForm=true">Edit</button>
		</div>
</div>
</template>

<script>
	import ProfileForm from './ProfileForm'

	export default {
		components: {ProfileForm},
		props: {
			user: {
				type: Object,
				required: true
			}
		},
		name: "Profile",
		data() {
			return {
				showForm: false
			}
		},
		methods: {
			saveUser(user) {
				this.$emit('save-user', user)
			}
		},
		filters: {
			readMore (text, limit, suffix) {
				return text.sudstring(0, limit) + suffix
			}
		}
	}
</script>