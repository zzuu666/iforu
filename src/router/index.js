import Vue from 'vue'
import Router from 'vue-router'

import Grid from '../components/Grid'
import Button from '../components/Button'
import Switch from '../components/switch'

Vue.use(Router)

const routes = [
  {
    path: '/grid',
    component: Grid
  },
  {
    path: '/button',
    component: Button
  },
  {
    path: '/switch',
    component: Switch
  }
]

export default new Router({
  routes
})
