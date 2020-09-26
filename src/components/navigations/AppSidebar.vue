<template>
	<div class="AppSidebar bg-white" :class="{ Show: navOpen }">
		<h1 class="Header px-3 py-2 d-flex justify-content-between align-items-center BgDarkPrimary TextLight"> Noty </h1>
		<div class="mt-3 NavLinks">
			<router-link 
				to="/recents" 
				exact-active-class="ActiveClass"
				class="d-block py-2 px-3 RouterLink"
				>
				Recents
			</router-link>
			<div class="Categories mt-3">
				<h2 class="Heading d-flex justify-content-between align-items-center px-3">
					Categories
					<button class="AddCategoryBtn">&plus;</button>
				</h2>
				<router-link 
					to="/read/business" 
					class="d-flex align-items-center justify-content-between py-2 px-3 RouterLink"
					exact-active-class="ActiveClass"
					>
					Business
					<span class="BgPrimary text-white d-inline-block badge badge-pill p-1">12</span>
				</router-link>
				<router-link 
					to="/read/school" 
					class="d-flex align-items-center justify-content-between py-2 px-3 RouterLink"
					exact-active-class="ActiveClass"
					>
					School
					<span class="BgPrimary text-white d-inline-block badge badge-pill p-1">122</span>
				</router-link>
				<router-link 
					to="/read/work" 
					class="d-flex align-items-center justify-content-between py-2 px-3 RouterLink"
					exact-active-class="ActiveClass"
					>
					Work
					<span class="BgPrimary text-white d-inline-block badge badge-pill p-1">142</span>
				</router-link>
				<router-link 
					to="/read/csm" 
					class="d-flex align-items-center justify-content-between py-2 px-3 RouterLink"
					exact-active-class="ActiveClass"
					>
					CSM 387
					<span class="BgPrimary text-white d-inline-block badge badge-pill py-1 px-2">0</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['navOpen'])
	},

	watch: {
		"$route": function(){
			this.$store.commit("showSidebar", false);
		}
	},

	methods: {
		closeSidebar(){
			this.$store.commit("showSidebar", false);
		}
	}
}
</script>