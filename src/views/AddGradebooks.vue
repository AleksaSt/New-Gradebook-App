<template>
  <div class="container">
    <div class="form-group mt-3">
        <label><b>Gradebook Name:</b></label>
        <input type="text" class="form-control" v-model="gradebook.name" placeholder="Name your gradebook!">
      </div>
      <button @click="addUsersGradebook" class="btn btn-primary">Create</button>
  </div>
</template>

<script>
import { gradebooksService } from '../services/GradebooksService'
export default {

  data(){
    return{
      gradebook:{}
    }
  },

  methods:{
    addUsersGradebook(){
      gradebooksService.addGradebook(this.gradebook)
    }
  }

}
</script>

<style>

</style>