import AppEditor from "@/views/AppEditor.vue";
import AppRecents from "@/views/AppRecents.vue";
import ReadNoteView from "@/views/ReadNoteView.vue";

export default [
	{
		path: "/",
		name: "home",
		redirect: "/recents"
	},

	{
		path: "/recents",
		name: "recents",
		component: AppRecents
	},

	{
		path: "/read/:category",
		name: "read",
		component: ReadNoteView
	},
	{
		path: "/create",
		name: "create",
		component: AppEditor
	}
]