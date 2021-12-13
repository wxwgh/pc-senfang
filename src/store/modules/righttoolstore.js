
const righttool_store = {

	state: {
		// 装备搜索面板显隐
		rightsearch_show_flag:false,
		layer_around:"",
		layer_point:"",
	},
	actions: {},
	mutations: {
		set_rightsearch_show_flag: (state,flag) => {
			state.rightsearch_show_flag = flag;
		},
		set_layer_around: (state,layer) => {
			state.layer_around = layer;
		},
		set_layer_point: (state,layer) => {
			state.layer_point = layer;
		},
	},
	getters: {
		get_rightsearch_show_flag: (state) => {
			return state.rightsearch_show_flag;
		},
		get_layer_around: (state) => {
			return state.layer_around;
		},
		get_layer_point: (state) => {
			return state.layer_point;
		},
	}
}
export default righttool_store
