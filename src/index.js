import Vue from 'vue';
import Demo from './Demo.vue';

var vm=new Vue({
  el:"#ex",
  components:{Demo},
  template: '<Demo />'
})