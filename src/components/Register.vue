<template>
  <div>
    <div class="container col-lg-offset-3 col-md-9 col-lg-9">
      <div class="row">
        <form class="form-horizontal" action="" method="">
          <div class="form-group">
            <label for="name" class="col-sm-1">username</label>
            <div class="col-sm-10">
              <input id="name" class="form-control" v-model="username" type="text" value="username" placeholder="用户名">
            </div>
          </div>

          <div class="form-group">
            <label for="pwd" class="col-sm-2">password</label>
            <div class="col-sm-10"><input type="password" class="form-control" v-model="pwd" id="pwd"
                                          value="password" placeholder="密码">
            </div>
          </div>

          <div class="form-group">
            <label for="name" class="col-sm-2">re_password</label>
            <div class="col-sm-10"><input id="re_password" class="form-control" type="password" value="re_password"
                                          v-model="re_pwd" placeholder="确认密码"></div>
          </div>
          <div class="form-group">
            <label for="name" class="col-sm-2">telephone</label>
            <div class="col-sm-10"><input id="phone_num" class="form-control" type="tel" value="telephone"
                                          v-model="phone_num" placeholder="手机号"></div>
          </div>
          <div class="form-group">
            <label for="name" class="col-sm-2">gender</label>
            <div class="col-sm-3" id="gender">
              <input id="male" type="radio" v-model="gender" name="gender" value="1">&nbsp;Male &nbsp;&nbsp;
              <input id="female" type="radio" v-model="gender" name="gender" value="0">&nbsp;Female
            </div>
          </div>
          <div class="form-group">
            <label for="name" class="col-sm-2">age</label>
            <div class="col-sm-10"><input id="age" class="form-control" type="number" v-model="age" value="age"
                                          placeholder="年龄">
            </div>
          </div>
          <div class="form-group">
            <label for="name" class="col-sm-2">job</label>
            <div class="col-sm-10"><input id="job" class="form-control" type="text" v-model="job" value="job"
                                          placeholder="职业">
            </div>
          </div>
          <div class="form-group">
            <label for="name" class="col-sm-2">salary</label>
            <div class="col-sm-10">
              <select name="salary" id="salary" v-model="salary" class="form-control">
                <option value="<2000">less than 2000</option>
                <option value="2000-5000">2000-5000</option>
                <option value="5000-8000">5000-8000</option>
                <option value="8000-10000">8000-10000</option>
                <option value="10000<">more than 10000</option>
              </select>
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
  export default {
    name: 'register',
    data() {
      return {
        username: '',
        pwd: '',
        re_pwd: '',
        age: '',
        job: '',
        phone_num: '',
        gender: '',
        salary: ''
      }
    },
    components: {},
    computed: {},
    methods: {
      submit: function () {
        let data = {
          username: this.username,
          pwd: this.pwd,
          re_pwd: this.re_pwd,
          phone_num: this.phone_num,
          age: this.age,
          job: this.job,
          salary: this.salary,
          gender: this.gender
        }
        if (this.pwd !== this.re_pwd) {
          return alert('re_password was wrong please try again')
        }
        this.axios.post('http://localhost:5000/api/v1/register', data).then(function (response) {
          console.log("axios then")
          alert(response.data.data)
          console.log(response.data) //data
          console.log(response.status) //code
          // console.log('statustext',response.statusText)  // "ok"
          console.log(response.headers) // {content-type: "application/json"}
          console.log(response.config)//all response include data,url,method,headers
        }).catch(function (error) {
          if (error.response) {
            //请求已发出，但服务器使用状态代码进行响应
            //落在2xx的范围之外
            console.log("axios catch")
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else {
            //在设置触发错误的请求时发生了错误
            console.log('Error', error.message)
          }
        })

      }
    }
  }
</script>

<style scoped>

</style>
