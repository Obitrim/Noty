<template>
	<button type="button" class="SidebarToggleBtn BgPrimary text-white d-lg-none px-2 py-1" @click="openSidebar">
		<template v-if="navOpen">&times;</template><!--times character-->
		<template v-else>&#9776;</template><!--hamburgar unicode character-->
	</button>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(["navOpen"])
	},

	methods: {
		openSidebar(){
			this.$store.commit("showSidebar", !this.navOpen);
		}
	}
}
</script>