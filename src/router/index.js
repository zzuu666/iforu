import Vue from 'vue'
import Router from 'vue-router'

import Grid from '../components/Grid'
import Button from '../components/Button'

Vue.use(Router)

const routes = [
  {
    path: '/grid',
    component: Grid
  },
  {
    path: '/button',
    component: Button
  }
]

export default new Router({
  routes
})
