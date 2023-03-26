<script setup>
  import Chart from 'chart.js/auto'
</script>

<template>
  <canvas id="myChart"></canvas>
  <!-- <div v-else>Please enter a date range to get past finances</div> -->
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                labels: [],
                datasets: [
                    {
                        label: 'Amount spent',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: []
                    }
                ]
            }
        },
        mounted() {
            const ctx = document.getElementById('myChart');
            new Chart(ctx, {
                type: 'bar',
                data: {
                labels: this.labels,
                datasets: this.datasets
                }
            });
        },
    }
</script>

<style scoped>

</style>