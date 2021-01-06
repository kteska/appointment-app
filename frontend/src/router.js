import MainPage from './pages/MainPage'
import AskQuestion from './pages/AskQuestion'
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const routes = [
  { path: '', component: MainPage },
  { path: '/ask', component: AskQuestion  },
]

export default new VueRouter({ routes });