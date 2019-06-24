import Vue from 'vue';
//import Demo from './Demo.vue';
//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import './web/a.css';
import { Button} from 'mint-ui';
Vue.component('mybtn', Button)
console.log(Button.name);
import login from './web/login.vue';
import apple from './web/apple.vue';
import banana from './web/banana.vue';
import app from './web/App.vue';
import register from './web/register.vue';
import VueRouter from 'vue-router';
import '../lib/mui/css/mui.min.css';
//Vue.use(VueRouter);
//Vue.use(MintUI);
var router=new VueRouter({
	routes:[
	{path:'/login',component:login,
	children:[
	{path:'apple',component:apple},
	{path:'banana',component:banana}
	]
	},
	{path:'/register',component:register}
	]
})

var vm=new Vue({
  el:"#ex",
//components:{Demo},
//template: '<Demo />'
//components:{login},

	data:{
		msg:'123'
	},
	render:function(createElements){
		return createElements(app)
	},
	router
})