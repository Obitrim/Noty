<template>
	<div class="AppRecents py-3 px-4">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-xl-3 my-2" v-for="n in 10" :key="n">
				<NoteCard :note="{
					title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dicta ratione nam ab, in soluta',
					category: 'Business'
				}"/>
			</div>
		</div>
	</div>
</template>

<script>
import NoteCard from "@/components/cards/NoteCard.vue";

export default {
	components: { NoteCard }
}
</script>