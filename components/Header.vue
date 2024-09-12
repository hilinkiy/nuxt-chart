<script setup lang="ts">
const selectedYear = ref('2023')

const selectedInterval = ref('day')

const updateInterval = (interval: string) => {
	selectedInterval.value = interval
}
</script>

<template>
	<div class="pr-5">
		<section class='chart'>
			<div class="flex items-center justify-between mb-5">
				<select class="select" v-model="selectedYear">
					<option value="2023">2023</option>
					<option value="2024">2024</option>
					<option value="both">2023 & 2024</option>
				</select>
				<div class="chart__days">
					<button class="chart__days-btn" @click="updateInterval('day')">
						1D
					</button>
					<button class="chart__days-btn" @click="updateInterval('week')">
						1W
					</button>
					<button class="chart__days-btn" @click="updateInterval('month')">
						1M
					</button>
				</div>
			</div>
			<Chart :selectedYear="selectedYear" :selectedInterval="selectedInterval" />
		</section>
	</div>
</template>

<style scoped>
.chart {
	border-radius: 20px;
	backdrop-filter: blur(140px);
	background: linear-gradient(153.43deg, rgba(255, 255, 255, 0.12) 35.157%, rgba(255, 255, 255, 0) 100%);
	padding: 25px;
}

.chart__days {
	@apply flex items-center gap-[10px]
}

.chart__days-btn {
	border-radius: 10px;
	padding: 10px;
	background: rgba(26, 17, 29, 0.7);
	@apply text-white
}

.select {
	border-radius: 10px;
	background: rgba(26, 17, 29, 0.7);
	padding: 10px;
	@apply text-white
}
</style>
