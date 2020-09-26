<template>
	<div class="NoteListHeader BgDarkPrimary py-3 px-2 px-md-3 pb-md-2">
		<div class="d-flex justify-content-between pr-5 pr-md-0 text-white">
			<span>General</span>
			<span>14 notes</span>
		</div>
		<input 
			type="text" 
			class="SearchInput w-100 px-3 py-2 mt-3" 
			placeholder="Filter note by title or content text" 
			@input="$emit('filter', $event.target.value)"
		/>
	</div>
</template>