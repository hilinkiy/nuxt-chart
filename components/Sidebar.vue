<script setup lang="ts">

</script>

<template>
	<div class="leftside">
		<div class="leftside__content">
			<ul class="leftside__list">
				<li style="margin-bottom: 50px;">
					<a href="">
						<img src="/logo.svg" alt="">
					</a>
				</li>
				<li>
					<a href="">
						<img src="/Home.png" alt="">
					</a>
				</li>
				<li>
					<a href="">
						<img src="/Graph.svg" alt="">
					</a>
				</li>
				<li>
					<a href="">
						<img src="/Bag 2.svg" alt="">
					</a>
				</li>
				<li>
					<a href="">
						<img src="/Setting.svg" alt="">
					</a>
				</li>
			</ul>
			<a href="">
				<img src="/Logout.png" alt="">
			</a>
		</div>
	</div>
</template>

<style scoped>
.leftside {
	padding: 30px;
	box-shadow: -1.5px 0px 0px 0px rgba(255, 255, 255, 0.15) inset;
	height: 100%;
}

.leftside__content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 100%;
}

.leftside__list {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
}
</style>