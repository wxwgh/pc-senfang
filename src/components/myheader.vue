<template>
	<div class="header_parent">
		<div class="time_parent">
			<span>{{time_second}}</span>
			<div>
				<span>{{time_week}}</span>
				<span>{{time_day}}</span>
			</div>
		</div>
		<div class="title_parent">
			<span>综合救援资源调用系统</span>
			<span>Integrated rescue resource call system</span>
		</div>
		<div class="user_parent">
			<div @click="user_click()">
				<el-avatar icon="el-icon-user-solid"></el-avatar>
			</div>
			<span>{{get_user_name}}</span>
		</div>
	</div>
</template>

<script>
	import logout from '@/components/logout.vue';
	export default {
		name: 'myheader',
		data() {
			return {
				time_second: "",
				time_day: "",
				time_week: "",
			}
		},
		components: {
			logout
		},
		computed:{
			get_user_name:function(){
				return this.$store.getters.get_user_info.姓名;
			}
		},
		mounted: function() {
			this.init_time();
		},
		methods: {
			//用户登录
			user_click(){
				let $this = this;
				//判断当前用户是否已登录,如果已登录则显示退出弹窗
				let flag = this.myCommon.is_user_login();
				if(flag){
					this.$store.commit("set_logout_show_flag",true);
				}else{
					this.$store.commit("set_login_show_flag",true);
					
				}
			},
			//更新时间
			init_time() {
				var $this = this;
				setInterval(function() {
					$this.time_second = $this.moment(new Date()).format("HH:mm:ss");
				}, 1000)
				//获取当前日期
				$this.time_day = $this.moment(new Date()).format("YYYY/MM/DD");
				//获取当前日期 是一周中的第几天
				var week_of_day = $this.moment(new Date()).format('E');
				var week_day = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
				$this.time_week = week_day[week_of_day];
			},
		},

	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";

	.header_parent {
		height: 88px;
		width: 100%;
		position: absolute;
		@display_row_between();
		top: 0;
		left: 0;
		z-index: 1002;
		.title_parent{
			flex:1;
			height: 88px;
			color: #fff;
			@display_column_start();
			align-items: center;
			background: url("../assets/images/mask.png") center -3px no-repeat;
			&>span:nth-child(1){
				margin-top: 10px;
				margin-bottom: 2px;
				font-size: 28px;
				font-weight: bold;
				font-family: '微软雅黑';
				letter-spacing: 1px;
				background-image: -webkit-linear-gradient(top, rgb(255, 255, 255), rgb(31, 126, 252));
				-webkit-background-clip: text;
				-webkit-text-fill-color: transparent;
			}
			&>span:nth-child(2){
				font-family: 'PingFang';
				font-size: 13px;
				font-weight: bold;
				letter-spacing: 1px;
			}
		}
		// 时间
		.time_parent {
			font-family: 'DS-Digital';
			color: @common_color;
			@display_row_start();
			width:30%;
			&>span{
				line-height: 88px;
				font-size: 42px;
				margin-left:5px;
				margin-right:5px;
			}
			&>div{
				@display_column_start();
				color: #fff;
				font-size: 16px;
			}
		}
		.user_parent{
			width:30%;
			@display_row_end();
			color:#fff;
			&>div{
				height:40px;
				cursor:pointer;
			}
			&>span:nth-child(2){
				margin-right: 10px;
				margin-left: 5px;
				font-size: 16px;
			}
		}
	}
</style>
