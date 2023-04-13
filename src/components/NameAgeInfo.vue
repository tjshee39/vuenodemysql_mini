<template>
	<div class="name-age-info">
		<h1>USER {{ $route.params.id }}'S INFORMATION</h1>

		<div class="input_form">
			<table>
				<tr>
					<td style="text-align: right">name</td>
					<td>
						<input
							type="text"
							v-model="name"
							:placeholder="dataInfo.name"
							maxlength="20"
						/>
					</td>
				</tr>
				<tr>
					<td style="text-align: right">age</td>
					<td>
						<input
							type="number"
							min="0"
							v-model="age"
							:placeholder="dataInfo.age"
						/>
					</td>
				</tr>
				<tr>
					<td colspan="2" id="btn_area">
						<button id="btn_delete" @click="deleteInfo()">삭제</button>
						<button id="btn_insert" @click="updateInfo()">수정</button>
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NameAgeInfo',
	data() {
		return {
			name: '',
			age: 0,
			id: this.$route.params.id,
			dataInfo: {},
		};
	},
	watch: {
		// 라우트가 변경되면 메소드를 다시 호출됩니다.
		$route: 'getInfo',
	},
	mounted() {
		this.id = this.$route.params.id;
		console.log('id', this.id, typeof this.id);
		this.getInfo();
	},
	methods: {
		async getInfo() {
			this.$axios
				.get(`/callapi/nameage-info/${this.id}`)
				.then(res => {
					// api 호출시 앞에 슬래시 꼭 써주기
					console.log(res.data[0]);
					return res.data[0];
				})
				.then(data => {
					this.dataInfo = data;
					this.name = this.dataInfo.name;
					this.age = this.dataInfo.age;
				});
		},
		async updateInfo() {
			// 동작에 대한 상태변수 전달
			// state: update or delete
			this.$axios
				.post(`/callapi/nameage/${this.id}`, {
					state: 'update',
					name: this.name,
					age: this.age,
				})
				.then(res => {
					// console.log(res);
					// 완료 시 목록 페이지로 이동
					window.location.href = '/name-age-list';
				});
		},
		async deleteInfo() {
			this.$axios
				.post(`/callapi/nameage/${this.id}`, { state: 'delete' })
				.then(res => {
					// console.log(res);
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
	height: 20px;
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
#btn_insert {
	margin-right: 5px;
}
</style>
