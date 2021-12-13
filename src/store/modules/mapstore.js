
const map_store = {

	state: {
		// 地图模块 全局map,底图layer,底图地址
		map:"",
		layer:"",
		url:"GaoDe.Normal.yx",
		loading:false,
	},
	actions: {},
	mutations: {
		set_map: (state, data) => {
			state.map = data;
		},
		set_layer: (state,data) => {
			state.layer = data;
		},
		set_loading: (state,flag) => {
			state.loading = flag;
		},
	},
	getters: {
		get_map: (state) => {
			return state.map;
		},
		get_map_url: (state) => {
			return state.url;
		},
		get_layer: (state) => {
			return state.url;
		},
		get_loading:function(state){
			return state.loading;
		},
	}
}
export default map_store
