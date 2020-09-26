import Vue from 'vue';
import Router from "vue-router";
import routes from "./routes.js";

Vue.use(Router);

const router = new Router({
	mode: "history",
	// base: process.env.,
	routes
});

export default router;