<script setup>
  import Chart from 'chart.js/auto'
</script>

<template>
  <canvas id="myChart" v-if="datasets[0]['data'].length > 0"></canvas>
  <div v-else>{{ text }}</div>
</template>

<script>
    export default {
        props: ['data', 'text'],
        data() {
            return { 
                labels: [],
                chart: null,
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
        watch: {
            data(data){
                this.datasets[0]['data'] = []
                this.labels = []
                data.forEach(element => {
                    var amount = element['amount']
                    var date = element['date']
                    var formattedDate = date.substring(0,10)
                    var [year, month, day] = formattedDate.split('-')
                    var date = new Date(year, month - 1, day)
                    var formattedDate = date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
                    this.labels.push(formattedDate)
                    this.datasets[0]['data'].push(amount)
                });
                this.destroyChart()
                setTimeout(() => {
                    this.buildChart()
                }, 500);
            }
        },
        methods: {
            buildChart(){
                const ctx = document.getElementById('myChart');
                this.chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                    labels: this.labels,
                    datasets: this.datasets
                    }
                });
            },
            destroyChart(){
                if(this.chart){
                    this.chart.destroy()
                }
            }
        },
    }
</script>

<style scoped>

</style>