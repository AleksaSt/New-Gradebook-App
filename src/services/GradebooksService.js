import { HttpService } from './HttpService'
import store from '../store';

class GradebooksService extends HttpService {

  getGradebooks(){
    return this.axios.get('gradebooks')
  }

  getGradebooksByUrl(){
    if(store.getters.getNextPageUrl){
      return this.axios.get(store.getters.getNextPageUrl)
    }
  }

  addGradebook(gradebook){
    return this.axios.post('gradebooks/create', gradebook)
  }

  search(term){
    return this.axios.get(`gradebooks/search/${term}`)
}
}

export const gradebooksService = new GradebooksService()
