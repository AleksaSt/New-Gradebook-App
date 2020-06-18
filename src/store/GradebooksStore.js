import { gradebooksService } from '../services/GradebooksService'

export const GradebooksStore = {

  state:{
    gradebooks:[],
    next_page_url: 'gradebooks',
    term:''
  },

  mutations:{
    extendsGradebooks(state, gradebooks){
      state.gradebooks.push(... gradebooks)
    },

    setNextPageUrl(state, url){
      state.next_page_url = gradebooksService.parseUrl(url)
    },

    setGradebooks(state, gradebooks){
      state.gradebooks = gradebooks
    },

    setTerm(state, term){
      state.term = term
    }
  },

  actions:{
    async getGradebooksByUrl(context){

      const response = await gradebooksService.getGradebooksByUrl()

      context.commit('extendsGradebooks', response.data.data)
      context.commit('setNextPageUrl', response.data.next_page_url)
    },

    async search(context, term){
      const response = await gradebooksService.search(term)
      context.commit('setGradebooks', response.data)
  }
  },

  getters:{
    getGradebooks(state){
        return state.gradebooks
    },

    getNextPageUrl(state){
        return state.next_page_url
    }
  }
}
