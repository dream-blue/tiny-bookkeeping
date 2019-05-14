<template>
    <div>
      <div class="panel panel-default" id="panel">
    <div class="panel-heading">list of bill tips</div>
    <div class="container col-md-offset-6 col-md-6">
        <div class="row">
            <form class="form-horizontal" action="" method="">
                <div class="form-group">
                    <label for="start_time" class="col-sm-2">start_time</label>
                    <div class="col-sm-3"><input id="start_time" v-model="start_time" value="start_time"
                                                 class="form-control" type="date"></div>
                    <label for="end_time" class="col-sm-2">end_time</label>
                    <div class="col-sm-3"><input id="end_time" v-model="end_time" value="end_time"
                                                 class="form-control" type="date"></div>
                    <button value="submit" @click="submit" type="button" class="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
    </div>
    <table class="table">
        <th>time</th>
        <th>money</th>
    </table>
</div>
    </div>
</template>

<script>
    export default {
        name: "GetList",
      data () {
          return {
            start_time : '',
            end_time : ''
          }
      },
      methods:{
          submit: function () {
              let data = {
                start_time: this.start_time,
                end_time: this.end_time
              }
              this.axios.get('http://localhost:5000/api/v1/bill_list', data).then(
                function (response) {
                  console.log(response.data)
                  console.log(response.status)
                  console.log(response.config)
                   // if($cookies.get("forend_token_str")){}else{}



                }

              ).catch(function (error) {
                if(error.response){
                  console.log(error.response.data)
                  console.log(error.response.status)
                  console.log(error.response.headers)
                }else{
                  console.log(error.message)
                  console.log(error.config)
                }
              })
          }
      }
    }
</script>

<style scoped>

</style>
