<template>
	<div class="name-age-list">
		<h1>{{ msg }}</h1>
		<NameAgeListTable />
	</div>
</template>

<script>
import NameAgeListTable from '@/tables/NameAgeListTable.vue';

export default {
	name: 'NameAgeList',
	props: {
		msg: String,
	},
	components: {
		NameAgeListTable,
	},
	// mounted() {
	// 	this.getData();
	// },
	// methods: {
	// 	async getData() {
	// 		this.$axios
	// 			.get('http://localhost:8000/nameage-list')
	// 			.then(res => {
	// 				return res.data;
	// 			})
	// 			.then(data => {
	// 				console.log('data', data);
	// 			});
	// 	},
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
.div_data_table {
	/* margin: auto; */
}
.data_table {
	margin: auto;
}
</style>
