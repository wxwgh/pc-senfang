import $store from '@/store/index.js';
import {Message} from 'element-ui';
//引入leaflet
import L from 'leaflet';
export default{
	UUID(){
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
		}
		return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4())
	},
	get_message(message){
		Message({
		    message: message,
			center:true,
			//显示时间,单位毫秒,0为永久显示 
			duration:1000,
			offset:parseInt(window.innerHeight/2),
			customClass:"message_class"
		});
	},
	unbind_event(map){
		map.off("mousedown");
		map.off("mousemove");
		map.off("contextmenu");
	},
	mouse_style(map,flag){
		if(flag){
			 map._container.style.cursor="default";
		}else{
			 map._container.style.cursor=""
		}
	},
	//判断是否登录
	is_user_login(){
		let flag = true;
		let name = $store.getters.get_user_info.姓名;
		console.log(name)
		if(name=="游客"){
			flag=false;
		}else{
			flag=true;
		}
		return flag;
	}
}