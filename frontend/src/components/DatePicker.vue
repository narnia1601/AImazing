<script setup>
    import axios from 'axios'
</script>

<template>
  <div>
    <div class="row">
        <div class="col">
            <div class="mb-3">
                <label for="startingDate" class="form-label">Starting Date:</label>
                <input type="date" @change="getTransactionsBetweenDateRanges" v-model="startingDate" class="form-control" id="startingDate">
            </div>
        </div>
        <div class="col">
            <div class="mb-3">
                <label for="endingDate" class="form-label">Ending Date:</label>
                <input type="date" @change="getTransactionsBetweenDateRanges" v-model="endingDate" class="form-control" id="endingDate">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    export default {
        props: ['transactionDataHandler'],
        data() {
            return {
                startingDate: null,
                endingDate: null,
            }
        },
        methods: {
            getTransactionsBetweenDateRanges(){
                const url = 'http://localhost:8080/transactions'
                if(this.startingDate != null && this.endingDate != null){
                    axios.get(url, {
                        params: {
                            startingDate: this.startingDate,
                            endingDate: this.endingDate
                        }
                    })
                    .then(res => {
                        this.transactionDataHandler(res.data)
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>