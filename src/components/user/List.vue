<template>
	<div id="user-list">
		<h1>Users lists <span>{{ counter }}</span></h1>
		<ul v-for="user of users" :key="user.id">
			<li><router-link tag="a" :to="/users/${ user.id }">
					{{ user.name }} {{ user.surname }}
				</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'list',
		data() {
			return {
				users: [
					{ 
						id: 1,
						name: 'name1',
						surname: 'surname1' 
					},
					{
						id: 2,
						name: 'name2',
						surname: 'surname2' 
					},
					{
						id: 3,
						name: 'name3',
						surname: 'surname3' 
					}
				]
			}
		},
		computed: {
			counter() {
			return this.$store.state.counter
			}
		}
	}
</script>

<style>

</style>