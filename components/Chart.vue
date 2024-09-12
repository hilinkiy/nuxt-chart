<template>
	<div>
		<Line :data="chartData" :options="chartOptions" />
	</div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	LineElement,
	PointElement,
	CategoryScale,
	LinearScale
} from 'chart.js'

const props = defineProps({
	selectedYear: String,
	selectedInterval: String,
})

ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const chartOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top',
		},
		title: {
			display: true,
			text: 'Sales Data Comparison',
		},
	},
}

const chartData = ref({
	labels: [],
	datasets: [],
})

const fetchData = async (year, interval) => {
	try {
		const response = await fetch('https://99687ed324b27e81.mokky.dev/data')
		const data = await response.json()

		const yearData = data[0][year][interval] || {}
		const labels = Object.keys(yearData)
		const values = Object.values(yearData)

		return { labels, values }
	} catch (error) {
		console.error('Error fetching data:', error)
		return { labels: [], values: [] }
	}
}

const updateChart = async () => {
	const interval = props.selectedInterval.toLowerCase() || 'day'
	const year = props.selectedYear

	if (year === 'both') {
		const data2023 = await fetchData('2023', interval)
		const data2024 = await fetchData('2024', interval)

		chartData.value = {
			labels: data2023.labels,
			datasets: [
				{
					label: `Sales 2023 (${interval})`,
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 1,
					data: data2023.values,
				},
				{
					label: `Sales 2024 (${interval})`,
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1,
					data: data2024.values,
				},
			],
		}
	} else if (year === '2023') {
		const { labels, values } = await fetchData(year, interval)

		chartData.value = {
			labels: labels,
			datasets: [
				{
					label: `Sales ${year} (${interval})`,
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 1,
					data: values,
				},
			],
		}
	} else {
		const { labels, values } = await fetchData(year, interval)

		chartData.value = {
			labels: labels,
			datasets: [
				{
					label: `Sales ${year} (${interval})`,
					backgroundColor: 'rgba(255, 99, 132, 1)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1,
					data: values,
				},
			],
		}
	}
}

watch(() => [props.selectedYear, props.selectedInterval], updateChart)

onMounted(updateChart)
</script>

<style scoped>
div {
	width: 1000px;
	margin: 0 auto;
}
</style>
