<script setup lang="ts">

</script>

<template>
	<nav class='nav'>
		<button>
			<img src="/Search bar.png" alt="" class="side__open">
		</button>
		<h1 class="nav__title">
			Home
		</h1>
		<div class="nav__right">
			<div class="relative">
				<input type="text" class="nav__input" placeholder="Search" />
				<button class="absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer bg-transparent hover:bg-transparent">
					<img src="/Union.svg" alt="">
				</button>
			</div>
			<div class="flex items-center gap-3">
				<button href="#!">
					<img src="/notification btn.png" alt="">
				</button>
				<a href="#!">
					<img src="/avatar.png" alt="">
				</a>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px 20px 15px 0;
}

.nav__title {
	font-size: 28px;
	color: white;
}

.nav__right {
	display: flex;
	align-items: center;
	@apply gap-10
}

.nav__input {
	@apply px-5 py-3 text-white outline-none border-none;
	border-radius: 15px;
	background: rgb(47, 41, 62);
}
</style>