<template>
	<div class="insertform">
		<h1>{{ msg }}</h1>
		<p>DML(Data Manipulation Language)</p>
		<p>:SELECT, <span id="insert">INSERT</span>, UPDATE, DELETE</p>

		<div class="input_form">
			<table>
				<tr>
					<td style="text-align: right">name</td>
					<td><input type="text" v-model="name" maxlength="20" /></td>
				</tr>
				<tr>
					<td style="text-align: right">age</td>
					<td>
						<input type="number" min="0" v-model="age" />
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<button id="btn_insert" @click="insertData()">추가</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InsertForm',
	props: {
		msg: String,
	},
	data() {
		return {
			name: '',
			age: 0,
		};
	},
	methods: {
		async insertData() {
			console.log('name: ', this.name);
			console.log('age: ', this.age);

			this.$axios
				.post('callapi/nameage', {
					name: this.name,
					age: this.age,
				})
				.then(res => {
					console.log(res);

					// 완료 시 목록 페이지로 이동
					window.location.href = '/name-age-list';
				});
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
#insert {
	color: red;
	font-weight: bold;
}
.input_form {
	margin: auto;
	width: 200px;
}
input {
	padding: 10px;
}
button {
	background-color: #42b983;
	border-radius: 5px;
	border: 1px solid;
}
#btn_insert,
#btn_delete {
	float: right;
}
</style>
