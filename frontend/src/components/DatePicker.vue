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
        props: ['transactionDataHandler', 'textHandler'],
        data() {
            return {
                startingDate: null,
                endingDate: null,
            }
        },
        methods: {
            getTransactionsBetweenDateRanges(){
                const url = 'http://localhost:8080/transactions'
                var startDate = new Date(this.startingDate)
                var endDate = new Date(this.endingDate)
                if(this.startingDate != null && this.endingDate != null){
                    if(startDate < endDate){
                        axios.get(url, {
                            params: {
                                startingDate: this.startingDate,
                                endingDate: this.endingDate
                            }
                        })
                        .then(res => {
                            this.transactionDataHandler(res.data)
                        })
                    }else{
                        this.textHandler('Please enter a valid starting date and ending date range')
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>