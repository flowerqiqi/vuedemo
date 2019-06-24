
<template>
	<div id="filter">
	<p>{{msg | msgformat}}</p>
	
</div>
</template>

<script>
Vue.filter('msgformat',function(msg){
  	return msg.replace(/单纯/g,'邪恶')
  })
export default {
  name: 'Filter',
  
  data () {
    return {
    msg:'曾经我是一个单纯地人，现在除了我是单纯地人还有人是单纯地人吗'
  	}
 }

}
</script>