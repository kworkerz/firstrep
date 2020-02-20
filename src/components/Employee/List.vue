<template>
	<div id="list-employees"> </div>
		<h1>List Employess</h1>
		<ul>
			<li 
				v-for="employee in employees"
				:key="employee.id">

			</li>
		</ul>
</template>

<script>

	export default {
		name: "List",
		methods: {
			getUsers(){
				this.$store.dispatch('getUsers')
			}
		},
		created: {
			this.getUsers;
		}
		data
	}

	created () {
		this.getEmployees()
	}
</script>