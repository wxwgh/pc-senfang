import Vue from 'vue'
import Vuex from 'vuex'
//地图主体 模块全局对象
import map_store from './modules/mapstore';
import righttool_store from './modules/righttoolstore';
import leftcontrol_store from './modules/leftcontrolstore';
import myheader_store from './modules/myheaderstore';
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {},
	actions: {},
	modules: {
		map_store:map_store,
		righttool_store:righttool_store,
		leftcontrol_store:leftcontrol_store,
		myheader_store:myheader_store
	}
})
