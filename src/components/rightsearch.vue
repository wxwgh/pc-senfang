<template>
	<transition tag="div" enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight">
		<div class="rightsearch_parent" v-if="get_flag">
			<div>
				<div>
					<!-- 头部标题 -->
					<div>
						<span>装备搜索</span>
						<span class="iconfont icon-guanbi4" @click="close_click()"></span>
					</div>
					<!-- 主体部分 -->
					<div>
						<div class="header_class">
							<span>坐标信息</span>
						</div>
						<div class="main_class">
							<div>
								<span>经度：</span>
								<el-input v-model="my_lng" size="mini" placeholder="请填写相应数值"></el-input>
							</div>
							<div>
								<span>纬度：</span>
								<el-input v-model="my_lat" size="mini" placeholder="请填写相应数值"></el-input>
							</div>
						</div>
						
						<div class="header_class">
							<span>搜索半径</span>
						</div>
						<div class="main_class">
							<div>
								<span>半径：</span>
								<el-input v-model="num" size="mini" placeholder="请填写相应数值"></el-input>
								<span>km</span>
							</div>
						</div>
						<div class="button_class">
							<div @click="coordinate_click()">
								<div>
									<span class="el-icon-coordinate"></span>
									<span>坐标拾取</span>
								</div>
							</div>
							<div @click="search_click()">
								<div>
									<span class="iconfont icon-sousuo"></span>
									<span>开始查询</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'rightsearch',
		data() {
			return {
				my_lng:"",
				my_lat:"",
				num:"",
			}
		},
		computed: {
			get_flag: function() {
				return this.$store.getters.get_rightsearch_show_flag;
			}
		},
		methods: {
			//面板关闭
			close_click() {
				this.$store.commit("set_rightsearch_show_flag",false);
			},
			//装备搜索 范围查询
			search_click(){
				let map = this.$store.getters.get_map;
				//首先判断是否是数字
				let taskRegex = /[0-9]/;
				if(!taskRegex.test(this.num)||!taskRegex.test(this.my_lat)||!taskRegex.test(this.my_lng)){
					this.myCommon.get_message("查询参数不能为空且必须为数字");
					return false;
				}else{
					let layer_around = this.$store.getters.get_layer_around;
					//清空前一个范围
					if(layer_around){
						layer_around.remove();
					}
					//根据半径画圆
					let layer = L.circle(L.latLng(this.my_lat,this.my_lng), {radius: this.num*1000}).addTo(map);
					this.$store.commit("set_layer_around",layer);
					//根据范围查询数据
				}	
			},
			//坐标拾取
			coordinate_click(){
				let $this = this;
				let map = this.$store.getters.get_map;
				//取消地图事件
				this.myCommon.unbind_event(map);
				//设置鼠标样式
				this.myCommon.mouse_style(map,true);
				//地图鼠标点击事件
				map.on("mousedown", function(e) {
					//判断是否是左键
					if (e.originalEvent.button === 0) {
						$this.my_lng = e.latlng.lng;
						$this.my_lat = e.latlng.lat;
						let marker = $this.create_marker(e.latlng);
						marker.addTo(map);
						$this.$store.commit("set_layer_point",marker);
						//还原鼠标样式
						$this.myCommon.mouse_style(map,false);
						//取消地图事件
						$this.myCommon.unbind_event(map);
					}
				})
				//地图鼠标右键事件
				map.on("contextmenu", function(e) {
					//还原鼠标样式
					$this.myCommon.mouse_style(map,false);
					//取消地图事件
					$this.myCommon.unbind_event(map);
				});
			},
			create_marker(latlng){
				let icon = L.divIcon({
					iconSize: [12,12],
					iconAnchor:[6,12],
					className: "zuobiao",
				});
				let marker = L.marker(latlng,{icon:icon});
				return marker;
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";
	.zuobiao{
		font-size:12px;
		line-height:12px;
		background-color: #ff0000;
		border-radius: 100%;
		box-shadow: 1px 1px 8px 0 rgb(0 0 0 / 75%);
	}
	.zuobiao:after{
		content: "";
		border-radius: 100%;
		height: 300%;
		width: 300%;
		position: absolute;
		margin: -100% 0 0 -100%;
		box-shadow: 0 0 6px 2px #ff0000;
		animation: pulsate 1s ease-out;
		animation-iteration-count: infinite;
		animation-delay: 0s;
	}
	@keyframes pulsate {
	    0% {
	        transform: scale(0.1, 0.1);
	        opacity: 0;
	        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	        filter: alpha(opacity=0);
	    }
	    50% {
	        opacity: 1;
	        -ms-filter: none;
	        filter: none;
	    }
	    100% {
	        transform: scale(1.2, 1.2);
	        opacity: 0;
	        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	        filter: alpha(opacity=0);
	    }
	}
	.rightsearch_parent{
		position: absolute;
		right: 5%;
		top: 0;
		width: 380px;
		pointer-events: none;
		height:100%;
		z-index:1002;
		@display_column_center();
		&>div{
			pointer-events:auto;
			position: relative;
			color: #fff;
			width: 100%;
			margin-bottom:20%;
			max-height:80%;
			z-index: 1003;
			background: rgba(10, 15, 25, .5);
			border: 1px rgba(31, 126, 252, .6) solid;
			&>div{
				width: 100%;
				height: 100%;
				margin-bottom: 15px;
				@display_column_start();
				align-items: center;
				&>div:nth-child(1){
					width: 92%;
					height: 40px;
					line-height: 40px;
					position: relative;
					@display_row_between();
					background: url(../assets/images/indexs_head.png) 0 0 no-repeat;
					&>span:nth-child(1) {
						margin-left: 12px;
						font-weight: bold;
						font-size: 15px;
						width: 300px;
						overflow: hidden;
						text-overflow: ellipsis;
					}
					&>span:nth-child(2) {
						width: 16px;
						cursor: pointer;
					}
					
					&>span:nth-child(2):hover {
						color: @common_color;
					}
					
					&>span:nth-child(1):after {
						content: '';
						display: block;
						position: absolute;
						left: 0;
						top: 13px;
						width: 4px;
						height: 16px;
						background: #fff;
						border-radius: 2px;
					}
				}
				&>div:nth-child(2){
					width: 92%;
					max-height: 100%;
					overflow: auto;
					display: flex;
					flex-direction: column;
					flex-wrap: nowrap;
					justify-content: flex-start;
					align-items: center;
					margin-top: 15px;
					border: 1px rgba(255, 255, 255, 0.2) solid;
					.header_class{
						position: relative;
						width: 92%;
						height: 40px;
						line-height: 40px;
						font-size: 14px;
						text-align: center;
						font-weight: bold;
						@display_row_between();
						&>span {
							margin-left: 12px;
						}
						&>span:after {
							content: '';
							display: block;
							position: absolute;
							left: 0px;
							top: 13px;
							width: 4px;
							height: 14px;
							background: #fff;
							border-radius: 2px;
						}
					}
					.header_class:before{
						content: '';
						display: block;
						position: absolute;
						left: 0px;
						right: 0px;
						bottom: 0;
						height: 1px;
						background: rgba(255, 255, 255, .2);
					}
					.main_class{
						position: relative;
						width: 92%;
						line-height: 24px;
						font-size: 13px;
						@display_column_start();
						&>div{
							margin-top:10px;
							margin-bottom:10px;
							@display_row_start();
							&>span:nth-child(3){
								margin-left:10px;
								text-align:center;
							}
						}
						.el-input__inner {
							background: 0;
							border: 1px rgba(255, 255, 255, .2) solid !important;
							line-height: 34px !important;
							font-size: 13px;
							padding: 0 15px;
							border-radius: 0;
							color: #fff;
						}
					}
					.button_class{
						width: 92%;
						margin-bottom: 10px;
						@display_row_end();
						font-size: 13px;
						color: #fff;
						&>div {
							background: #236FD1;
							width: 90px;
							height: 26px;
							line-height: 26px;
							@display_column_center();
							border-radius: 3px;
							cursor: pointer;
							&>div{
								line-height: 26px;
								text-align: center;
								&>span:first-child {
									font-size: 14px;
									margin-right: 5px;
								}
								
							}
						}
						&>div:hover {
							background: #409EFF;
						}
						&>div:first-child{
							margin-right: 10px;
						}
					}
				}
			}
			&>div:before{
				content: '';
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 140px;
				background: linear-gradient(to bottom, rgba(12, 52, 130, .5), transparent);
				z-index: -100;
			}
		}
	}

</style>
