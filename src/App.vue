<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <g-button></g-button>
  </div>
</template>

<script>
import Hello from './components/Hello'
import gButton from './components/Button'

export default {
  name: 'app',
  components: {
    Hello,
    gButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
