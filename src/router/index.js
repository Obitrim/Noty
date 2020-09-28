import Vue from 'vue';
import store from "@/store";
import Router from "vue-router";
import routes from "./routes.js";

Vue.use(Router);

const router = new Router({
	mode: "history",
	// base: process.env.,
	routes
});

router.beforeEach((to, from, next) => {
	let categoryParam = to.params.category;
	if(categoryParam){
		store.commit('setFocusedCategory', categoryParam);
	}
	next();
});

export default router;