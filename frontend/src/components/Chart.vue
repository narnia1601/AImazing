<script setup>
  import Chart from 'chart.js/auto'
</script>

<template>
  <canvas id="myChart"></canvas>
</template>

<script>
    export default {
        data() {
            return {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
                datasets: [
                    {
                        label: 'Amount spent',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [65, 59, 80, 81, 56, 55, 40, 10, 20, 30, 40, 50]
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