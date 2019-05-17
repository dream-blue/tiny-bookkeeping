<template>
  <div>
    <h1>I will miss you</h1>
    <br>
    <div>{{msg}}</div>
    <button id="out" @click="logout" value="submit" type="button" class="btn btn-primary">logout</button>
  </div>
</template>

<script>
  export default {
    name: "Out",
    data() {
      return {
        msg: 'See you then'
      }
    },
    methods:{
      logout:function () {
        this.axios.delete('http://localhost:5000/api/v1/logout').then(
          function (response) {
            $cookies.remove("forend_token_str")
            alert("you are out")
          }
        ).catch(function (error) {
          console.log(error.message)
        })
      }
    }
  }

</script>

<style scoped>

</style>
