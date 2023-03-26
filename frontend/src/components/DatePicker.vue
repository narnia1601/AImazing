<script setup>
  
</script>

<template>
  <div>
    <div class="row">
        <div class="col">
            <div class="mb-3">
                <label for="startingDate" class="form-label">Starting Date:</label>
                <input type="date" v-model="startingDate" class="form-control" id="startingDate">
                {{ startingDate }}
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
                <label for="endingDate" class="form-label">Ending Date:</label>
                <input type="date" v-model="endingDate" class="form-control" id="endingDate">
                {{ endingDate }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                startingDate: null,
                endingDate: null
            }
        }
    }
</script>

<style scoped>

</style>