<template>
  <div>
    <div class="container col-md-offset-3 col-md-6">
      <div class="row">
        <form class="form-horizontal" action="" method="">

          <div class="form-group">
            <label for="name" class="col-sm-2">username</label>
            <div class="col-sm-10"><input id="name" v-model="username" class="form-control" type="text" value="username" placeholder="用户名">
            </div>
          </div>

          <div class="form-group">
            <label for="pwd" class="col-sm-2">password</label>
            <div class="col-sm-10"><input type="password" v-model="pwd" class="form-control" id="pwd" value="pwd" placeholder="密码">
            </div>
          </div>

          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button value="submit" @click="submit" type="button" class="btn btn-primary">submit</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import VueCookies from 'vue-cookies'
export default{
  name: 'login',
  data () {
    return {
      username: '',
      pwd: ''
    }
  },
  methods:{
    submit:function () {
      let data = {
        username: this.username,
        pwd: this.pwd
      }
      this.axios.post('http://localhost:5000/api/v1/login', data).then(
        function(response){
          console.log("login then>>")
          let data = response.data
          console.log(response.data)
          console.log(response.status)
          console.log(response.config)
          let expireDays = 1000 * 60 * 60
          let cookie = data.forend_token_str
          let user_id = data.user_id
          let response_cookie = {
            user_id:user_id,
            user_token:cookie
          }
          VueCookies.set("forend_token_str", response_cookie, expireDays)
        }
      ).catch(function (error) {
        if(error.response){
           console.log("axios login catch>>>")
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.config)
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
