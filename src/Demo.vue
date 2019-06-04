<template>
	<div id="demo">
	<label>
		id:<input type="text" v-model="id"/>
		name:<input type="text" v-model="name">
		<button type="button" value="添加" @click="add">添加</button>
		<table>
			<thead >
				<tr>
					<th>id</th>
					<th>name</th>
					<th>ctime</th>
					<th>operation</th>
				</tr>
			</thead>
			<tbody>
				<tr  v-for="item in car" :key="item.id">
					<td>{{item.id}}</td>
					<td>{{item.name}}</td>
					<td>{{item.ctime}}</td>
					<td><a href="#" @click.prevent="del(item.id)">删除</a></td>
				</tr>
			</tbody>
		</table>
	</label>
</div>
</template>
<style>
	table,th,td{
		border: 1px solid #222222;
		border-collapse: collapse;
	}
</style>
<script>
export default {
  name: 'Demo',
  data () {
    return {
    id:'',
    name:'',
    car:[
    {id:1,name:'奥迪',ctime:new Date()},
    {id:2,name:'宝马',ctime:new Date()}
    ]
  	}
 },
  methods:{
		add(){
			this.car.push({id:this.id,name:this.name,ctime:new Date()})
			this.id=''
			this.name=''
		},
		del(id){
//		this.car.some((item,i)=>{
//			if(item.id==id){
//				this.car.splice(i,1)
//				return true;
//			}
//		})
		var index=this.car.findIndex(item=>{
			if(item.id== id){
				
				return true;
			}
		})
		this.car.splice(index,1)
		}
}
}
</script>