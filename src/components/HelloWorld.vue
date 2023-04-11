<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			DML(Data Multipulation Language)<br />
			SELECT, <span id="insert">INSERT</span>, UPDATE, DELETE
		</p>

		<div class="input_form">
			<div id="input_form_name">
				name: <input type="text" v-model="name" /><br />
			</div>
			<div id="input_form_age">age: <input type="number" v-model="age" /></div>
			<button id="btn_insert" @click="insertData()">확인</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data() {
		return {};
	},
	methods: {
		async insertData() {
			console.log('name: ', this.name);
			console.log('age: ', this.age);

			this.$axios
				.post('http://localhost:8000/insertNameAge', {
					name: this.name,
					age: this.age,
				})
				.then(res => {
					console.log(res);
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
}
.input_form {
	margin: auto;
	justify-content: center;
	width: 200px;
}
#input_form_name,
#input_form_age {
	margin-bottom: 10px;
}
input {
	height: 20px;
}
#btn_insert {
	float: right;
}
</style>
