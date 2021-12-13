<template>
	<div id="app" v-loading.fullscreen.lock="get_loading" element-loading-text="数据加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.5)">
		<!-- 页眉 -->
		<myheader></myheader>
		<!-- 左侧控制器 -->
		<leftcontrol></leftcontrol>
		<!-- 地图模块 -->
		<mymap></mymap>
		<!-- 右上工具栏 -->
		<!-- <righttooltop></righttooltop> -->
		<!-- 右侧工具栏 -->
		<righttool></righttool>
		<!-- 右侧装备查询面板 -->
		<rightsearch></rightsearch>
		<!-- 登录页面 -->
		<login></login>
		<!-- 用户信息模块 -->
		<logout></logout>
	</div>
</template>
<script>
	import myheader from '@/components/myheader.vue';
	import leftcontrol from '@/components/leftcontrol.vue';
	import mymap from '@/components/mymap.vue';
	// import righttooltop from '@/components/righttooltop.vue';
	import righttool from '@/components/righttool.vue';
	import rightsearch from '@/components/rightsearch.vue';
	import login from '@/components/login.vue';
	import logout from '@/components/logout.vue';
	export default {
		components: {
			myheader,
			mymap,
			leftcontrol,
			righttool,
			// righttooltop,
			rightsearch,
			login,
			logout,
		},
		data() {
			return {
			};
		},
		mounted: function() {
		},
		created: function() {
			// $("body").css("min-height", window.innerHeight);
		},
		computed: {
			get_loading: function() {
				return this.$store.getters.get_loading;
			}
		},
		methods: {
		}
	};
</script>
<style lang="less">
	/* 初始化环境 */
	html,
	body {
		height: 100%;
		width: 100%;
		-webkit-user-select: none;
		font-size: 16px;
		color: #2c3e50;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-family:'PingFang';
		white-space:nowrap;
		overflow: hidden;
	}
	@font-face{font-family:'PingFang';src:url('./assets/fonts/PingFang.ttf') format('truetype');font-weight:normal;font-style:normal;}
	@font-face{font-family:'DS-Digital';src:url('./assets/fonts/DS-DIGIB.ttf') format('truetype');font-weight:normal;font-style:normal;}
	body {
		margin: 0;
		padding: 0;
		background: #fff;
	}

	body img {
		border: none;
		margin: 0;
		padding: 0;
	}

	div,
	h1,
	h2,
	h3,
	h4,
	p,
	form,
	label,
	input,
	textarea,
	img,
	span {
		margin: 0;
		padding: 0;
		// 允许在单次内换行
		word-break: break-all;
		word-wrap: break-word;
	}

	ul {
		margin: 0;
		padding: 0;
		list-style-type: none;
		word-break: break-all;
		word-wrap: break-word;
	}

	dl,
	dt,
	dd {
		margin: 0;
		padding: 0;
		border: 0;
	}

	a {
		color: #5f6477;
		text-decoration: none;
	}

	a:hover {
		color: #5f6477;
		text-decoration: none;
	}

	:focus {
		outline: 0;
	}

	input,
	select {
		font-family: "微软雅黑";
	}

	/* 设置滚动条的样式 */
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
	}

	/* 滚动槽 */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
		border-radius: 10px;
		background-color: #ddd;

	}

	/* 滚动条滑块 */
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		height: 1px;
		background: #777;
	}

	#app {
		height: 100%;
		width: 100%;
		position:relative;
	}
	
</style>
