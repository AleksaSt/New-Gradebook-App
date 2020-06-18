<template>
  <div class="container">
    <div class="form-group mt-3">
        <label><b>Professors Name:</b></label>
        <input type="text" class="form-control" v-model="professor.name" placeholder="Professor name">
    </div>
    <button @click="addCreatedProfessor" class="btn btn-primary">Create</button>
  </div>
</template>

<script>
import { professorsService } from '../services/ProfessorsService'
export default {
  data(){
    return{
      professor:{}
    }
  },

  methods:{
    addCreatedProfessor(){
      professorsService.addProfessor(this.professor)
    }
  }
}
</script>

<style>

</style>   