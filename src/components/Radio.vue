<template>
  <div class="guide">
    <demo title="基本">
      <i-radio v-model="picked1" label="one">Radio</i-radio>
      <i-radio v-model="picked1" label="two">Radio</i-radio>
      <i-radio v-model="picked1" label="three" :disabled="true">Radio</i-radio>
    </demo>
     <demo title="组合">
       <i-radio-group v-model="picked2">
         <i-radio label="one">One</i-radio>
         <i-radio label="two">Two</i-radio>
         <i-radio label="three">Three</i-radio>
         <i-radio label="four">Four</i-radio>
       </i-radio-group>
       <p>Now is picked: {{picked2}}</p>
     </demo>
     <demo title="垂直模式">
       <i-radio-group v-model="picked5" mode="vertical">
         <i-radio label="one">One</i-radio>
         <i-radio label="two">Two</i-radio>
         <i-radio label="three">Three</i-radio>
         <i-radio label="four">
           More... <i-input v-show="picked5 === 'four'"></i-input>
         </i-radio>
       </i-radio-group>
     </demo>
     <demo title="按钮样式">
       <i-radio-group v-model="picked3">
         <i-radio-button label="one">One</i-radio-button>
         <i-radio-button label="two">Two</i-radio-button>
         <i-radio-button label="three" :disabled="true">Three</i-radio-button>
       </i-radio-group>
       <p>Now is picked: {{picked3}}</p>
     </demo>
     <demo title="三种大小">
       <div class="demo-row">
         <i-radio-group v-model="picked4" size="lg">
           <i-radio-button label="one">One</i-radio-button>
           <i-radio-button label="two">Two</i-radio-button>
           <i-radio-button label="three">Three</i-radio-button>
         </i-radio-group>
       </div>
       <div class="demo-row">
         <i-radio-group v-model="picked4">
           <i-radio-button label="one">One</i-radio-button>
           <i-radio-button label="two">Two</i-radio-button>
           <i-radio-button label="three">Three</i-radio-button>
         </i-radio-group>
       </div>
       <div class="demo-row">
         <i-radio-group v-model="picked4" size="sm">
           <i-radio-button label="one">One</i-radio-button>
           <i-radio-button label="two">Two</i-radio-button>
           <i-radio-button label="three">Three</i-radio-button>
         </i-radio-group>
       </div>
       <p>Now is picked: {{picked4}}</p>
     </demo>
  </div>
</template>

<script>
import Demo from './demo/grid'
import iRadio from '../ui/radio'
import iInput from '../ui/input'

const iRadioGroup = iRadio.Group
const iRadioButton = iRadio.Button
export default {
  name: 'GuideSelect',
  components: {
    Demo,
    iInput,
    iRadio,
    iRadioGroup,
    iRadioButton
  },
  data () {
    return {
      picked1: '',
      picked2: '',
      picked3: '',
      picked4: '',
      picked5: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import "index";
</style>
