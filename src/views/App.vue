<template>
	<div id="App" class="d-flex">
		<AppSidebar/>
		<SidebarToggler/>
		<div class="AppRouterView">
			<transition name="fade" mode="out-in">
				<router-view/>
			</transition>
		</div>
	</div>
</template>

<script>
import AppSidebar from "@/components/navigations/AppSidebar.vue";
import SidebarToggler from "@/components/buttons/SidebarToggleBtn.vue";

export default {
	components: { AppSidebar, SidebarToggler }
};
</script>