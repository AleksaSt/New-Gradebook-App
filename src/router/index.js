import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Gradebooks from '../views/Gradebooks.vue'
import Professors from '../views/Professors.vue'
import AddGradebooks from '../views/AddGradebooks.vue'
import AddProfessors from '../views/AddProfessors.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      guest: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta:{
      guest: true
    }
  },

  {
    path: '/',
    name: 'Gradebooks',
    component: Gradebooks,
  
  },
  {
    path: '/gradebooks/create',
    name: 'AddGradebooks',
    component: AddGradebooks,
  
  },
  {
    path: '/professors/create',
    name: 'AddProfessors',
    component: AddProfessors,
  
  },
  {
    path: '/professors',
    name: 'Professors',
    component: Professors,
  
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      guest: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  
  const isUserLoggedIn = store.getters.isUserLoggedIn

  if(!to.meta.guest && !isUserLoggedIn){
    return next({
      name: 'Login'
    })
  }

  if(to.name == 'Login' && isUserLoggedIn){
    return next({
      name: 'Home'
    })
  }

  if(to.name == 'Register' && isUserLoggedIn){
    return next({
      name: 'Home'
    })
  }

  return next()
})


export default router









