<template>
	<div class="righttool_parent">
		<el-tooltip content="装备搜索" placement="left" effect="light">
			<div @click="search_click()">
				<span class="el-icon-search"></span>
			</div>
		</el-tooltip>
		<el-tooltip content="清除" placement="left" effect="light">
			<div @click="clear_click()">
				<span class="iconfont icon-qingchu2"></span>
			</div>
		</el-tooltip>
		<div @click="zoomin_click()">
			<span class="iconfont icon-jiahao"></span>
		</div>
		<div @click="zoomout_click()">
			<span class="iconfont icon-jianhaocu"></span>
		</div>
	</div>
</template>

<script>
	
	export default {
		name: 'righttool',
		data() {
			return {}
		},
		methods: {
			zoomin_click() {
				let map = this.$store.getters.get_map;
				map.zoomIn();
			},
			zoomout_click() {
				let map = this.$store.getters.get_map;
				map.zoomOut();
			},
			//打开搜索面板
			search_click(){
				let flag = this.$store.getters.get_rightsearch_show_flag;
				if(flag){
					this.$store.commit("set_rightsearch_show_flag",false);
				}else{
					this.$store.commit("set_rightsearch_show_flag",true);
				}
			},
			clear_click(){
				let layer_around = this.$store.getters.get_layer_around;
				let layer_point = this.$store.getters.get_layer_point;
				if(layer_around){
					layer_around.remove();
				}
				if(layer_point){
					layer_point.remove();
				}
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";
	.righttool_parent {
		position: absolute;
		bottom: 80px;
		right: 21px;
		color: #fff;
		z-index: 1002;
		@display_column_start();
		border-radius: 4px;
		background: rgba(0, 0, 0, .4);
		&>div{
			width: 32px;
			height: 32px;
			text-align: center;
			line-height: 16px;
			line-height: 32px;
			cursor: pointer;
		}
		&>div:hover {
			color: #409EFF;
		}
	}
</style>
