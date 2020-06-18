<template>
  <div class="container">
    <h3 class="mt-3">Register Here!</h3>
    <div>
      <div>
        <img src="https://www.dlf.pt/png/list/14/143193_register-icon-png.png" class="img">
      </div>
      <div v-for="(error, index) in errors" :key="index" class="alert alert-danger mt-3">
        {{ error[0] }}
      </div>
      <div class="form-group mt-3">
        <label><b> Name: </b></label>
        <input type="text" class="form-control" v-model="user.name" placeholder="Write your name">
      </div>
      <div class="form-group">
        <label><b> Email: </b></label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Write your email">
      </div>
      <div class="form-group">
        <label><b> Password: </b></label>
        <input type="password" class="form-control" v-model="user.password" placeholder="Write your password">
      </div>
      <div class="form-group">
        <label><b> Repeat Password: </b></label>
        <input type="password" class="form-control" v-model="user.confirm_password" placeholder="Repeat your password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" v-model="user.accept_terms_and_conditions" value="1">
        <label class="form-check-label-mb-3">Accept Terms And Conditions</label>
      </div>
      <button class="btn btn-primary" @click="registerUser()">Register</button>
    </div>
  </div>
</template>

<script>
import { authService } from '../services/AuthService'
import { mapActions } from 'vuex'
export default {
  data(){
    return{
        user:{},
        errors:[]
    }
  },

  methods:{

    ...mapActions({
        login: 'login'
    }),

    registerUser(){
      authService.register(this.user).then(() => {
        this.login({email: this.user.email, password: this.user.password})
        this.$router.push({name: 'Home'})
      }).catch(error => {
        this.errors = error.response.data.errors
      })
    }
  }
}
</script>

<style>
  .img{
      height:100px;
      width:100px;
      margin-top:20px;
      margin-bottom:20px;
  }
</style>