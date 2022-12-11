<script setup lang="ts">
import BarChart from '~~/components/charts/BarChart.vue'
import LineChart from '~~/components/charts/LineChart.vue'
import PieChart from '~~/components/charts/PieChart.vue'

  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      },
      {
        label: 'Data One',
        backgroundColor: '#236356',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
      }
    ]
  }

  const pieData = {
    labels: ['Data One', 'Data Two', 'Data Three', 'Data Four'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#f87979',
        data: [40, 39, 10, 40, 39, 80, 40]
      },
      {
        label: 'Data Two',
        backgroundColor: '#FFCC00',
        data: [80, 200, 300, 600, 500, 100, 700]
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false
  }

</script>

<template>
  <div class="h-[400px]">
    <LineChart :chartData="lineData" :chartOptions="options" v-show="lineData" />
    <BarChart :chartData="data" :chartOptions="options" v-show="data" />
    <PieChart :chartData="pieData" :chartOptions="options" v-show="pieData" />
  </div>
</template>