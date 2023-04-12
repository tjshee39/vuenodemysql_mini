<template>
	<div class="page-not-found">
		<h1>페이지를 찾을 수 없습니다</h1>
		<!-- <img :src="imgSrc" /> -->
		<img :src="pic_404" alt="404-error" />
	</div>
</template>

<script>
import imgSrc from '@/assets/404-error.png';

export default {
	name: 'PageNotFoundView',
	data() {
		return {
			pic_404: imgSrc,
		};
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
</style>
