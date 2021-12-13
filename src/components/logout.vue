<template>
	<el-dialog title="用户信息"
		:visible="get_flag"
		append-to-body
		width="400px"
		@close="close_panel"
		:close-on-click-modal="false">
		<div class="logout_parent">
			<div>
				<div v-for="(value,key) in get_info">
					<div>
						<span v-for="i in key.split('')">{{i}}</span>
					</div>
					<span v-if="value==0||value==1" :class="[{'el-icon-success':value==1,'el-icon-error':value==0}]"></span>
					<span v-else>{{value}}</span>
				</div>
			</div>
			<div @click="logout_click">退出</div>
			<div @click="close_panel">取消</div>
		</div>
	</el-dialog>
	
</template>

<script>
	export default {
		name: 'logout',
		data() {
			return {
				user_name:"",
				user_password:""
			}
		},
		computed:{
			get_flag:function(){
				return this.$store.getters.get_logout_show_flag;
			},
			get_info:function(){
				return this.$store.getters.get_user_info;
			}
		},
		methods: {
			close_panel(){
				this.$store.commit("set_logout_show_flag",false);
			},
			logout_click(){
				this.$store.commit("set_logout_show_flag",false);
				this.$store.commit("set_user_name","游客");
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";
	.el-icon-success{
		color:#00ff00;
	}
	.el-icon-error{
		color:#ff0000
	}
	.logout_parent{
		@display_column_start();
		&>div{
			margin-top:10px;
			max-height:200px;
			overflow:auto;
			text-align:center;
		}
		&>div:first-child{
			@display_column_start();
			text-align:left;
			font-size:15px;
			line-height:40px;
			color:#555666;
			&>div{
				@display_row_start();
				margin-left:5px;
			}
			&>div>span:nth-child(2){
				flex:1;
				margin-left:20px;
			}
			&>div>span:nth-child(3){
				cursor:pointer;
				margin-right:5px;
				color:@common_color;
			}
			&>div>div{
				width:80px;
				// margin-left:10px;
				@display_row_between();
			}
		}
		&>div:nth-child(2){
			width:100%;
			height:40px;
			line-height:40px;
			margin-top: 20px;
			font-weight:bold;
			background:#ff0000;
			border-radius: 2px;
			cursor:pointer;
			color:#fff;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 0.04);
		}
		&>div:nth-child(2):hover{
			background:#d70000;
		}
		&>div:nth-child(3){
			width:100%;
			height:40px;
			margin-bottom: 10px;
			line-height:40px;
			font-weight:bold;
			border-radius: 2px;
			cursor:pointer;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, 0.04);
		}
		&>div:nth-child(3):hover{
			background:#e4e4e4;
		}
	}

</style>
