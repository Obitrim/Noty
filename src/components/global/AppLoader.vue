<template>
	<div class="AppLoaderDialog d-flex justify-content-center align-items-center" v-if="$store.state.loading">
		<div class="AppLoader bg-white px-3 py-2 d-flex align-items-center">Please wait...</div>
	</div>
</template>