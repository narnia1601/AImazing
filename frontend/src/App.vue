<script setup>
  import Navbar from './components/Navbar.vue'
  import Chart from './components/Chart.vue'
  import DatePicker from './components/DatePicker.vue'
</script>

<template>
  <div class="container-fluid">
    <Navbar></Navbar>
    <div class="container">
      <DatePicker></DatePicker>
      <Chart></Chart>
    </div>
  </div>
</template>

<style scoped>

</style>
