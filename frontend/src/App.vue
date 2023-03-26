<script setup>
  import Navbar from './components/Navbar.vue'
  import Chart from './components/Chart.vue'
  import DatePicker from './components/DatePicker.vue'
</script>

<template>
  <div class="container-fluid">
    <Navbar></Navbar>
    <div class="container">
      <DatePicker :textHandler="textHandler" :transactionDataHandler="transactionDataHandler"></DatePicker>
      <Chart :data="data" :text="text"></Chart>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          data: [],
          text: 'Please enter a date range to get past finances'
        }
      },
      methods: {
        transactionDataHandler(data){
          this.data = data
        },
        textHandler(text){
          console.log('Running')
          this.text = text
          this.data = []
        }
      },
  }
</script>

<style scoped>

</style>
