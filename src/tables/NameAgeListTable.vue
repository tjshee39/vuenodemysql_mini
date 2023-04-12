<template>
	<div class="div_data_table">
		<table class="data_table">
			<thead>
				<th style="border-top-left-radius: 10px">no</th>
				<th>name</th>
				<th style="border-top-right-radius: 10px">age</th>
			</thead>
			<tbody>
				<tr
					v-for="(data01, index01) in dataList"
					:key="index01"
					@click="moveToInfo(data01.id)"
				>
					<td v-for="(data02, index02) in data01" :key="index02">
						{{ data02 }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	name: 'NameAgeListTable',
	data() {
		return {
			dataList: [],
		};
	},
	mounted() {
		this.getData();
	},
	methods: {
		async getData() {
			this.$axios
				.get('/callapi/nameage-list')
				.then(res => {
					return res.data;
				})
				.then(data => {
					console.log('data', data);
					this.dataList = data;
				});
		},
		async moveToInfo(id) {
			this.$router.push({ name: 'name-age-info', params: { id } });
		},
	},
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
table thead {
	background-color: #42b983;
	/* box-shadow: 0 0 0 1px #000; */
}
table th {
	width: 100px;
	padding: 10px;
	/* border-radius: 10 10 0 0px; */
}
table td {
	padding-top: 5px;
	padding-bottom: 5px;
	height: 10px;
}
.data_table {
	margin: auto;
	border-collapse: collapse;
	border-radius: 10px 10px 0px 0px;
	border-style: hidden;
	box-shadow: 0 0 0 1px #000;
}
</style>
