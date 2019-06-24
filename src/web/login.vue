<template>
	<div>
		<h1 @click="show">这是login.vue中登录界面</h1>
		<router-link to='/login/apple'>苹果</router-link>
		<router-link to='/login/banana'>香蕉</router-link>
		<router-view></router-view>
	</div>
	
</template>
<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			show(){
				console.log('调用了组件身上的show方法')
			}
		}
	}
	export var a="你好"
	export var b="sandy"
</script>
<style scoped>
	h1{
		color: lightblue;
	}
</style>