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
				<h2 class="Heading d-flex justify-content-between align-items-center pl-3 pr-2">
					Categories
					<button class="AddCategoryBtn">&plus;</button>
				</h2>
				<router-link 
					:to="`/read/${category}`" 
					class="d-flex align-items-center justify-content-between py-2 px-3 RouterLink"
					exact-active-class="ActiveClass"
					v-for="(category, index) in noteCategories"
					:key="category + index"
					>
					{{ category }}
					<span class="BgPrimary text-white d-inline-block badge badge-pill p-1">
						{{ getNotesCountInCategory(category) }}
					</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['navOpen', 'noteCategories', 'categorizedNotes'])
	},

	watch: {
		"$route": function(){
			this.$store.commit("showSidebar", false);
		}
	},

	methods: {
		closeSidebar(){
			this.$store.commit("showSidebar", false);
		},

		getNotesCountInCategory(category){
			category = category.toLowerCase();
			return this.categorizedNotes[category]?.length;
		}
	}
}
</script>