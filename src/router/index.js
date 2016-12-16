import Vue from 'vue'
import Router from 'vue-router'

import Grid from '../components/Grid'
import Button from '../components/Button'
import Switch from '../components/switch'
import Menu from '../components/Menu'
import Input from '../components/Input'

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
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/input',
    component: Input
  }
]

export default new Router({
  routes
})
