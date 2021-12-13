<template>
	<div class="left_parent">
		<div @click="user_click">
			<span class="iconfont icon-zhuanti"></span>
			<span>人员管理</span>
		</div>
		<div @click="equip_click">
			<span class="iconfont icon-zhuanti"></span>
			<span>装备管理</span>
		</div>
		<userpanel></userpanel>
		<equippanel></equippanel>
	</div>
</template>

<script>
	import userpanel from '@/components/userpanel.vue';
	import equippanel from '@/components/equippanel.vue';
	export default {
		name: 'leftcontrol',
		data() {
			return {
			}
		},
		components: {
			userpanel,
			equippanel,
		},
		methods: {
			user_click(){
				//查询本单位用户信息触发异步函数
				this.$store.dispatch("init_users_info");
				this.$store.commit("set_userpanel_show_flag",true);
			},
			equip_click() {
				
				this.$store.commit("set_equippanel_show_flag",true);
			},
		},
		
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";
	
	.left_parent{
		position: absolute;
		top: 0px;
		left: 0px;
		width: 220px;
		height: 100%;
		z-index: 1002;
		background: url(../assets/images/leftbar.png) right center no-repeat;
		color: #fff;
		@display_column_center();
		align-items:center;
		
		&>div {
			background: url(../assets/images/indexs_head.png) right bottom no-repeat;
			letter-spacing: 1px;
			cursor: pointer;
			line-height: 46px;
			margin-bottom: 5px;
			width: 100%;
		}
		
		&>div.active,
		&>div:hover {
			color: #e8e900;
			background: url(../assets/images/indexs_head2.png) right bottom no-repeat
		}
		
		&>div>span:nth-child(1) {
			font-weight: normal;
			font-size: 21px;
			margin-right: 5px;
			margin-left:15px;
			position: relative;
			top: 1px;
		}
		
		&>div>span:nth-child(2) {
			font-weight: bold;
			font-size: 16px;
		}
	}
</style>
