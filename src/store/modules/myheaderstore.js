
let host="8.130.173.218:8091"
const myheader_store = {
	state: {
		user_id:"",
		user_token:"",
		danwei_id:"",
		login_show_flag:false,
		logout_show_flag:false,
		url:"http://"+host+"/SFZB/login/user",
		user_info_url:"http://"+host+"/SFZB/userinfo/",
		user_info:{
			姓名:"游客"
		}
	},
	actions: {},
	mutations: {
		set_user_name: (state, name) => {
			state.user_name = name;
		},
		set_user_id: (state,id) => {
			state.user_id = id;
		},
		set_user_token: (state,token) => {
			state.user_token = token;
		},
		set_login_show_flag: (state,flag) => {
			state.login_show_flag = flag;
		},
		set_logout_show_flag: (state,flag) => {
			state.logout_show_flag = flag;
		},
		set_user_info: (state,data) => {
			({
				//姓名
				nickname:state.user_info.姓名,
				//性别
				sex:state.user_info.性别,
				//单位名称
				danwei:{fullname:state.user_info.单位名称},
				//联系电话
				tel:state.user_info.联系电话,
				//是否是管理员
				isadmin:state.user_info.管理员,
				//是否是联系人
				islinkman:state.user_info.联系人,
				//是否是审核员
				ischeckman:state.user_info.审核员,
				//是否在位
				iszw:state.user_info.在位,
				//水域培训情况
				sypxstatus:state.user_info.水域培训,
				//地震培训情况
				ddpxstatus:state.user_info.地震培训,
				//绳索培训情况
				sspxstatus:state.user_info.绳索培训,
				//搜救犬训导员培训情况
				sjqxdypxstatus:state.user_info.搜救犬训导员,
				//医疗救护人员培训情况
				yljhrpxstatus:state.user_info.医疗救护人员,
				//潜水培训情况
				qspxstatus:state.user_info.潜水培训,
				//大型机械操作手培训情况
				dxjxczspxstatus:state.user_info.大型机械操作,
				//其他培训情况
				qtpxstatus:state.user_info.其他培训,
			} = data);
			state.danwei_id = data.danwei.id;
		},
		set_user_name:function(state,name){
			state.user_info.姓名 = name;
		}
		
		
	},
	getters: {
		get_user_name: (state) => {
			return state.user_name;
		},
		get_user_id: (state) => {
			return state.user_id;
		},
		get_user_token: (state) => {
			return state.user_token;
		},
		get_login_show_flag: (state) => {
			return state.login_show_flag;
		},
		get_logout_show_flag: (state) => {
			return state.logout_show_flag;
		},
		get_login_url: (state) => {
			return state.url;
		},
		get_user_info_url: (state) => {
			return state.user_info_url;
		},
		get_user_info: (state) => {
			return state.user_info;
		},
		get_danwei_id: (state) => {
			return state.danwei_id;
		},
		
	}
}
export default myheader_store
