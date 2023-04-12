<template>
	<div class="name-age-list">
		<NameAgeList msg="NameAgeList" />
	</div>
</template>

<script>
// @ is an alias to /src
import NameAgeList from '@/components/NameAgeList.vue';

export default {
	name: 'NameAgeListView',
	components: {
		NameAgeList,
	},
};
</script>
