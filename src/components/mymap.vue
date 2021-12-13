<template>
	<div class="map_parent">
		<div id="map"></div>
		<!-- 四周黑色半透遮罩 -->
		<div class="mask-left"></div>
		<div class="mask-righ"></div>
		<div class="mask-top"></div>
		<div class="mask-bot"></div>
	</div>
</template>

<script>
	export default {
		name: 'mymap',
		components: {
		},
		data() {
			return {}
		},
		mounted: function() {
			this.init_map();
		},
		methods: {
			init_map() {
				var height = parseInt(window.innerHeight);
				$("#map").css("height", height);
				let url = this.$store.getters.get_map_url;
				let map = L.map("map", {
					center: [39.550339, 100.114129],
					zoom:4,
					minZoom: 2,
					maxZoom: 18,
					zoomControl: false,
					attributionControl: false,
					keyboard: false,
					preferCanvas: true
				});
				this.$store.commit('set_map',map);
				
				let layer = L.tileLayer.chinaProvider(url,{ transparent: true,zIndex: 0,noWrap:true}).addTo(map);
				this.$store.commit("set_layer",layer);
				
				window.onresize = function() {
					var height = parseInt(window.innerHeight);
					$("#map").css("height", height);
				}
			},
		},
	}
</script>

<style lang="less">
	.map_parent {
		width: 100%;
		height: 100%;
		position: absolute;
		overflow: hidden;
		.mask-left {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			width: 140px;
			background: linear-gradient(to right, rgba(0, 0, 0, .9), rgba(0, 0, 0, .6));
			z-index: 1001;
			pointer-events: none;
		}
		
		.mask-left:after {
			content: '';
			display: block;
			position: absolute;
			left: 140px;
			top: 0;
			bottom: 0;
			width: 160px;
			background: linear-gradient(to right, rgba(0, 0, 0, .6), transparent);
		}
		
		.mask-righ {
			position: absolute;
			right: 0;
			top: 0;
			bottom: 0;
			width: 140px;
			background: linear-gradient(to left, rgba(0, 0, 0, .9), rgba(0, 0, 0, .6));
			z-index: 1001;
			pointer-events: none;
		}
		
		.mask-righ:after {
			content: '';
			display: block;
			position: absolute;
			right: 140px;
			top: 0;
			bottom: 0;
			width: 160px;
			background: linear-gradient(to left, rgba(0, 0, 0, .6), transparent);
		}
		
		.mask-top {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			height: 300px;
			background: linear-gradient(to bottom, #0B0F19, transparent);
			z-index: 1001;
			pointer-events: none;
		}
		
		.mask-bot {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			height: 200px;
			background: linear-gradient(to top, #0B0F19, transparent);
			z-index: 1001;
			pointer-events: none;
		}
		#map {
			width: 100%;
			overflow: hidden;
		}
	}

	
</style>
