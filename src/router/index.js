import Vue from 'vue'
import Router from 'vue-router'

import Readme from '../components/Readme'
import Grid from '../components/Grid'
import Button from '../components/Button'
import Switch from '../components/switch'
import Menu from '../components/Menu'
import Input from '../components/Input'
import Select from '../components/Select'
import Tag from '../components/Tag'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Readme
  },
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
  },
  {
    path: '/select',
    component: Select
  },
  {
    path: '/tag',
    component: Tag
  }
]

export default new Router({
  routes
})
