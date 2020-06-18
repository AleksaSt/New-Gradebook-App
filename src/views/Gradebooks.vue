<template>
  <div class="container">
      <h3 class="mt-3"> All Gradebooks </h3>
     <div v-for="(gradebook, index) in gradebooks" :key="index">
       <ul class="list-group">
         <li class="list-group-item">
            {{ gradebook.name }}
         </li>
       </ul>
     </div>
     <button v-if="next_page_url" @click="show()" class="btn btn-primary mt-3">
       <div v-if="!gradebooks.length">
         Show All Gradebooks
       </div>
       <div v-else>
         Load More
       </div>
     </button>
  </div>
</template>

<script>
// import { gradebooksService } from '../services/GradebooksService'
import { mapActions, mapGetters } from 'vuex'

export default {

  computed:{
    ...mapGetters({
      gradebooks: 'getGradebooks',
      next_page_url: 'getNextPageUrl'
    }),

  },

  methods:{
      ...mapActions({
        getGradebooks: 'getGradebooksByUrl'
      }),

      show(){
        this.getGradebooks()

      }
  }
}
</script>

<style>

</style>