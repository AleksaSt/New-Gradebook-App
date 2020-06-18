<template>
  <div>
   <b-nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <b-nav-item href="/home">Home</b-nav-item>
    <b-nav-item v-if="isUserLoggedIn" href="/">Gradebooks</b-nav-item>
    <b-nav-item v-if="isUserLoggedIn" href="/professors">Professors</b-nav-item>
    <b-nav-item v-if="!isUserLoggedIn" href="/login">Login</b-nav-item>
    <b-nav-item v-if="!isUserLoggedIn" href="/register">Register</b-nav-item>
    <b-nav-item v-if="isUserLoggedIn" href="/my-gradebook">My Gradebook</b-nav-item>
    <b-nav-item v-if="isUserLoggedIn" href="/gradebooks/create">Add Gradebooks</b-nav-item>
    <b-nav-item v-if="isUserLoggedIn" href="/professors/create">Add Professor</b-nav-item>
    <button v-if="isUserLoggedIn" class="btn btn-danger" @click="logoutUser()">Logout</button>
    <div class="form-inline my-2 my-lg-0 ml-auto">
      <input v-if="isUserLoggedIn" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button v-if="isUserLoggedIn" class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </div>
  </b-nav>
  </div>
</template>
 
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
   
  computed:{
    ...mapGetters({
      isUserLoggedIn: 'isUserLoggedIn'
    })

  },

  methods:{
    ...mapActions({
      logout: 'logout'
    }),

    logoutUser(){
      this.logout().then(() => {
        if(this.$route.name != 'Home'){
          this.$router.push({name: 'Home'})
        }
      })
    }
  }

}
</script>
 
<style>
  
</style>
