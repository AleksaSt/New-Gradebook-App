<template>
  <div class="container">
      <h3 class="mt-3"> All Professors </h3>
     <div v-for="(professor, index) in professors" :key="index">
       <ul class="list-group">
         <li class="list-group-item">
            {{ professor.name }}
         </li>
       </ul>
     </div>
  </div>
</template>

<script>
import { professorsService } from '../services/ProfessorsService'
export default {

  data(){
    return{
      professors:{}
    }
  },

  created(){
   professorsService.getProfessors().then((response) => {
     this.professors = response.data
   })
  }
  
}
</script>

<style>

</style>