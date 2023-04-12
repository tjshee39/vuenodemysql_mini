<template>
	<div class="name-age-info">
		<NameAgeInfo />
	</div>
</template>

<script>
// @ is an alias to /src
import NameAgeInfo from '@/components/NameAgeInfo.vue';

export default {
	name: 'NameAgeInfoView',
	components: {
		NameAgeInfo,
	},
};
</script>
