<script setup>
  import Navbar from './components/Navbar.vue'
  import Chart from './components/Chart.vue'
  import DatePicker from './components/DatePicker.vue'
</script>

<template>
  <div class="container-fluid">
    <Navbar></Navbar>
    <div class="container">
      <DatePicker :transactionDataHandler="transactionDataHandler"></DatePicker>
      <Chart :data="data"></Chart>
    </div>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          data: []
        }
      },
      methods: {
        transactionDataHandler(data){
          this.data = data
        }
      },
  }
</script>

<style scoped>

</style>
