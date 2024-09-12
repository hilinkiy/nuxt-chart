<script setup lang="ts">
</script>

<template>
	<div class="wrapper">
		<Sidebar />
		<Home />
	</div>
</template>

<style scoped>
.wrapper {
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 10fr;
	gap: 20px;
}
</style>