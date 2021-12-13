<template>
	<div class="righttooltop_parent">
		<!-- 填写坐标查询 -->
		<div @click="tianxie_click()">
			<span class="el-icon-edit-outline"></span>
			<span>填写</span>
		</div>
		<!-- 拾取坐标查询 -->
		<div @click="shiqu_click()">
			<span class="el-icon-coordinate"></span>
			<span>拾取</span>
		</div>
		
	</div>
</template>

<script>
	// import download from '@/components/download.vue';
	export default {
		name: 'righttooltop',
		data() {
			return {
			}
		},
		components: {
			// download,
		},
		methods: {
			tianxie_click(){
				
			},
			shiqu_click(){
				
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";

	.righttooltop_parent {
		position:absolute;
		width:150px;
		line-height:35px;
		right:25px;
		top:90px;
		color:#fff;
		z-index:1002;
		border-radius: 4px;
		background: rgba(0,0,0,.4);
		@display_row_around();
		&>div{
			position: relative;
			cursor:pointer;
			&>span:nth-child(1){
				font-size: 16px;
				margin-right:4px;
			}
			&>span:nth-child(2){
				font-size: 14px;
			}
		}
		&>div:hover{
			color:#409EFF;
		}
		&>div:not(:last-child):after{
			content: '';
			display: block;
			position: absolute;
			right: -14px;
			top: 50%;
			transform: translateY(-50%);
			width: 1px;
			height: 14px;
			background: #ccc;
		}
	}
	
</style>
