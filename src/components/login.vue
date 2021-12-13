<template>
	<el-dialog title="用户登录"
		:visible="get_flag"
		append-to-body
		width="400px"
		@close="close_panel"
		:close-on-click-modal="false">
		<div class="login_parent">
			<el-input v-model="user_name" size="medium" placeholder="用户名"></el-input>
			<el-input v-model="user_password" size="medium" placeholder="密码"></el-input>
			<div @click="login_click">登录</div>
			<div @click="close_panel">取消</div>
		</div>
	</el-dialog>
	
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				user_name:"",
				user_password:""
			}
		},
		computed:{
			get_flag:function(){
				return this.$store.getters.get_login_show_flag;
			}
		},
		methods: {
			init_panel() {
				this.user_name=""
				this.user_password="";
			},
			close_panel(){
				this.$store.commit("set_login_show_flag",false);
				this.init_panel();
			},
			//登录
			login_click(){
				let $this = this;
				let taskRegex = /.*[^\s]/;
				if(!taskRegex.test(this.user_name)||!taskRegex.test(this.user_password)){
					this.myCommon.get_message("用户名和密码不能为空");
					return false;
				}
				let send_data={
					username:this.user_name,
					password:this.user_password
				}
				let url = this.$store.getters.get_login_url;
				this.axios({
					method: 'post',
					url: url,
					data:send_data,
					headers:{'Content-Type': 'application/json; charset=utf-8'}
				}).then(function (result) {
					let data = result.data;
					if(data.success){
						//获取用户id token
						$this.$store.commit("set_user_id",data.id);
						$this.$store.commit("set_user_token",data.token);
						$this.close_panel();
						$this.get_user_info()
					}else{
						$this.myCommon.get_message(data.info);
					}
				}).catch(function(error){
					console.log(error);
				})
			},
			//获取登录用户 基本信息
			get_user_info(){
				let $this = this;
				let url = this.$store.getters.get_user_info_url;
				let user_id = this.$store.getters.get_user_id;
				let user_token = this.$store.getters.get_user_token;
				this.axios({
					method: 'get',
					url: url+user_id,
					headers:{
						'Content-Type': 'application/json; charset=utf-8',
						'accessToken':user_token
					}
				}).then(function (result) {
					let data = result.data;
					$this.$store.commit("set_user_info",data);
					let user_info = $this.$store.getters.get_user_info;
					// if(data.success){
					// 	//获取用户id token
					// 	$this.$store.commit("set_user_id",data.id);
					// 	$this.$store.commit("set_user_token",data.token);
					// 	$this.close_panel();
					// }else{
					// 	$this.myCommon.get_message(data.info);
					// }
				}).catch(function(error){
					console.log(error);
				})
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";
	
	.login_parent{
		@display_column_start();
		&>div{
			margin-top:10px;
			text-align:center;
		}
		&>div:nth-child(3){
			width:100%;
			height:40px;
			line-height:40px;
			font-weight:bold;
			background:@common_color;
			border-radius: 2px;
			cursor:pointer;
			color:#fff;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 0.04);
		}
		&>div:nth-child(3):hover{
			background:#4178bb;
		}
		&>div:nth-child(4){
			width:100%;
			height:40px;
			line-height:40px;
			font-weight:bold;
			border-radius: 2px;
			cursor:pointer;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 0.04);
		}
		&>div:nth-child(4):hover{
			background:#e4e4e4;
		}
	}

</style>
