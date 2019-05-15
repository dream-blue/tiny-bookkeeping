<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">detail of bill tips</div>
      <div class="container col-md-offset-6 col-md-6">
        <div class="row">
          <form class="form-horizontal" action="" method="">

            <div class="form-group">
              <label for="start_time" class="col-sm-2">start_time</label>
              <div class="col-sm-3"><input id="start_time" class="form-control" v-model="start_time"
                                           type="date" value="start_time"></div>
              <label for="end_time" class="col-sm-2">end_time</label>
              <div class="col-sm-3"><input id="end_time" class="form-control" v-model="end_time"
                                           type="date" value="end_time"></div>
              <button value="submit" @click="submit" type="button" class="btn btn-primary">submit</button>
            </div>
          </form>
        </div>
      </div>
      <table class="table">
        <th>time</th>
        <th>remarks</th>
        <th>money</th>
        <tr v-for="show_list">
          
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  import $ from 'jquery'

  export default {
    name: "GetDetail",
    data() {
      return {
        start_time: '',
        end_time: '',
        show_list:[],
      }
    },
    methods: {
      submit: function () {
        let data = {
          start_time: this.start_time,
          end_time: this.end_time
        }
        let token = $cookies.get("forend_token_str")
        console.log(">>data>>>>>", token)
        if (token) {
          data.forend_token_str = token
        } else {
          redirect('/login')
        }
        let params_str = qs.stringify(data)
        console.log(params_str, typeof(params_str))
       $.ajax({
         url:'http://localhost:5000/api/v1/bill',
         type:"GET",
          headers: {
                'Content-type': 'application/json;charset=UTF-8'
            },
         data:params_str,

         success: function (data) {
        if (data.code === 201) {
          $.each(data.data_detail, function (digit, recive_data) {
            let tr_tag = document.createElement("tr");
            let td_time = document.createElement("td");
            let td_remarks = document.createElement("td");
            let td_money = document.createElement("td");
            $(tr_tag).appendTo("table");
            $(td_time).text(recive_data.time);
            $(td_remarks).text(recive_data.remarks);
            $(td_money).text(recive_data.money);
            $(tr_tag).append(td_time);
            $(tr_tag).append(td_remarks);
            $(tr_tag).append(td_money);
          });
          let tr_tag = document.createElement("tr");
          let td_total_tag = document.createElement("td");
          let td_num_tag = document.createElement("td");
          $(tr_tag).appendTo("table");
          $(td_total_tag).text("total");
          $(td_total_tag).css({"font-size": "30px"});
          $(td_num_tag).text(data.total);
          $(td_num_tag).css({"font-size": "30px"});
          $(tr_tag).append(td_total_tag);
          $(tr_tag).append(td_num_tag);}
         },
         error:function (error) {
           console.log(error)
         }


       })


        /*
        this.axios.get('http://localhost:5000/api/v1/bill', {param:{data}}).then(
          function (response) {
            console.log(response.data)
            console.log(response.status)
            console.log(response.config)
            let data_obj = response.data
            let table = document.getElementsByTagName("table")[0]
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
            td_num_tag.innerHTML(data.total)
            td_num_tag.style.fontSize = '30px'
            tr_tag.push(td_total_tag)
            tr_tag.push(td_num_tag)

          }
        ).catch(
          function (error) {
            if (error.response) {
              console.log(error.response.data)
              console.log(error.response.status)
              console.log(error.response.headers)
            } else {
              console.log(error.message)
              console.log(error.config)
            }
          }
        )
        */
      }
    }
  }



</script>

<style scoped>

</style>
