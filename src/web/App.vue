<template>
	<div>
		<p>App组件</p>
		<mt-button type="primary" @click="show">primary</mt-button>
		<mybtn type="primary">1234</mybtn>
		<button type="button" class="mui-btn mui-btn-royal">
					紫色
				</button>
		<router-link to='/login'>登录</router-link>
		<router-link to='/register'>注册</router-link>
		<router-view></router-view>
	</div>
</template>
<script>
import { Toast } from 'mint-ui';
	export default{
		data(){
			return {
				toastinstance:null
			}
		},
		created(){
			this.getlist()
		},
			methods:{
				getlist(){
					this.show()
					setTimeout(()=>{
						this.toastinstance.close()
					},3000)
				},
				show(){
				this.toastinstance=Toast({
                    message: '操作成功',
                    iconClass: 'glyphicon glyphicon-ok',
                    className: "mytoast",
                    duration:-1
                   
						})
				}
			}
		
	}
</script>