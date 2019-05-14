<template>
    <div>
      <div class="container col-md-offset-3 col-md-6">
    <div class="row">
        <form class="form-horizontal" action="" method="">

            <div class="form-group">
                <label for="money" class="col-sm-2">money</label>
                <div class="col-sm-10"><input id="money" v-model="money" class="form-control" type="number"
                                              value="money"></div>
            </div>

            <div class="form-group">
                <label for="remarks" class="col-sm-2">remarks</label>
                <div class="col-sm-10"><input type="text" v-model="remarks" class="form-control" id="remarks"
                                              value="remarks"></div>
            </div>

            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button @click="submit" value="submit" type="button" class="btn btn-primary">submit</button>
                </div>
            </div>

        </form>
    </div>
</div>
    </div>
</template>

<script>
    export default {
        name: "input",
      data () {
          return {
            money: '',
            remarks: ''
          }
      },
      methods:{
          submit:function () {

            let data = {
              money : this.money,
              remarks : this.remarks
            }
            this.axios.post('http://localhost:5000/api/v1/bill', data).then(
              function (response) {
                console.log(response.data)
                console.log(response.status)
                console.log(response.config)
                if($cookies.get("forend_token_str")){}else{}
              }
            ).catch(function(error){
              if(error.response){
                console.log("axios login catch>>>")
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
              }else{
                console.log(error.message)
                console.log("login>error>>config", error.config)
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
