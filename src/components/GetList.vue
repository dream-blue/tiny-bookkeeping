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
      <table id="td_tag">
        <th>time</th>
        <th>money</th>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GetList",
    data() {
      return {
        start_time: '',
        end_time: ''
      }
    },
    methods: {
      submit: function () {
        let data = {
          start_time: this.start_time,
          end_time: this.end_time
        }

        this.axios.get('http://localhost:5000/api/v1/bill_list', data).then(
          function (response) {
            console.log(response.data)
            //{money: 40, remarks: "fruits", time: "2019-04-12 00:59:20", user: "peter"}
            console.log('only data', response.data.data)
            console.log(response.status)
            console.log(response.config)
            let data_obj = JSON.stringify(response.data.data)
            alert(data_obj)
            let table = document.getElementById("td_tag")
            for (item in data_obj) {
              console.log("item>>detail", item)
              let tr_tag = document.createElement("tr")
              let td_time = document.createElement("td")
              let td_remarks = document.createElement("td")
              let td_money = document.createElement("td")
              table.push(tr_tag)
              td_time.innerHTML(item.time);
              td_remarks.innerHTML(item.remarks)
              td_money.innerHTML(item.money)
              tr_tag.push(td_time)
              tr_tag.push(td_remarks)
              tr_tag.push(td_money)
            }
            let tr_tag = document.createElement("tr")
            let td_total_tag = document.createElement("td")
            let td_num_tag = document.createElement("td")
            table.push(tr_tag)
            td_total_tag.innerHTML("total")
            td_total_tag.style.fontSize = '30px'
            td_num_tag.innerHTML(response.data.total)
            td_num_tag.style.fontSize = '30px'
            tr_tag.push(td_total_tag)
            tr_tag.push(td_num_tag)
          }
        ).catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else {
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
