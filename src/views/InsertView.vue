<template>
	<div class="insert">
		<!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
		<HelloWorld msg="INSERT" />
	</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/InsertForm.vue';

export default {
	name: 'InsertView',
	components: {
		HelloWorld,
	},
};
</script>
