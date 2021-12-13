
//引入axios
import axios from 'axios';
let host="8.130.173.218:8091";
const leftcontrol_store = {

	state: {
		// 人员管理面板显隐
		userpanel_show_flag:false,
		// 装备管理面板显隐
		equippanel_show_flag:false,
		users_info:[],
		users_info_url:"http://"+host+"/SFZB/userinfo/bydanweiid/"
	},
	actions: {
		// 获取用户列表 通过单位id
		init_users_info:function(context){
			axios({
			    method: 'get',
			    url: context.getters.get_users_info_url+context.getters.get_danwei_id,
				headers:{
					'Content-Type': 'application/json; charset=utf-8',
					'accessToken':context.getters.get_user_token
				}
			}).then(function (result) {
				// for(let i=0;i<20;i++){
				// 	result.data.rows.push(result.data.rows[0]);
				// }
				context.commit("init_users_info",result.data.rows);
			}).catch(function(error){
				console.log(error);
			})
		},
	},
	mutations: {
		init_users_info:function(state,infos){
			state.users_info=infos;
		},
		set_userpanel_show_flag: (state,flag) => {
			state.userpanel_show_flag = flag;
		},
		set_equippanel_show_flag: (state,flag) => {
			state.equippanel_show_flag = flag;
		},
	},
	getters: {
		get_users_info_url:function(state){
			return state.users_info_url;
		},
		get_userpanel_show_flag: (state) => {
			return state.userpanel_show_flag;
		},
		get_equippanel_show_flag: (state,flag) => {
			return state.equippanel_show_flag;
		},
		get_users_info:function(state){
			return state.users_info;
		},
	}
}
export default leftcontrol_store
