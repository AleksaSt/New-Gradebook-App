<template>
  <div class="container">
    <div>
      <h3 class="mt-3">Login into your account</h3>
    </div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7ly6Nep4C_fGpdCTAxzjDeyNhLUsRWrdqdg_tbvey6WxsYgzs&usqp=CAU" class="img">
    </div>
    <div>
      <div v-if="errors.length" class="alert alert-danger mt-3">
        {{ errors }}
      </div>
      <div class="form-group mt-3">
        <label><b> Email: </b></label>
        <input type="email" class="form-control" v-model="user.email" placeholder="Write your email">
      </div>
      <div class="form-group">
        <label><b> Password: </b></label>
        <input type="password" class="form-control" v-model="user.password" placeholder="Write your password">
      </div>
      <button class="btn btn-primary" @click="loginUser()">Login</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return{
      user:{}
    }
  },

  computed:{
    ...mapGetters({
      errors: 'getErrors'
    })
  },

  methods:{
    ...mapActions({
      login: 'login'
    }),

    loginUser(){
      this.login(this.user).then(() => {
        if(!this.errors){
          this.$router.push({name: 'Home'})
        }
      })
    }

  }
}
</script>

<style>
  
</style>