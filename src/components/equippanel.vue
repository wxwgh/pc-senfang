<template>
	<el-dialog title="装备管理" class="equippanel_parent"
		:visible="get_flag"
		append-to-body 
		@close="close_panel"
		:close-on-click-modal="false">
		<el-tabs v-model="active_name" @tab-click="handle_click">
		    <el-tab-pane label="装备列表" name="1">
				<el-table :data="table_data" height="200" border size="small">
					<el-table-column prop="name" label="装备类别" :resizable="false">
					</el-table-column>
					<el-table-column prop="num" label="数量" :resizable="false">
					</el-table-column>
					<el-table-column prop="rank" label="耐久度" :resizable="false">
					</el-table-column>
				</el-table>
				<div class="add_class">
					<span @click="add_click()" >添加装备</span>
				</div>
			</el-tab-pane>
			
		    <el-tab-pane label="我的申请" name="2">
				<el-table :data="table_data" height="200" border size="small">
					<el-table-column prop="name" label="装备类别">
					</el-table-column>
					<el-table-column prop="num" label="数量">
					</el-table-column>
					<el-table-column prop="rank" label="耐久度">
					</el-table-column>
				</el-table>
				<div class="shenqing_class">
					<span @click="update_click()" >更新</span>
				</div>
			</el-tab-pane>
		    <el-tab-pane label="我的审核" name="3">
				<el-table :data="table_data" height="200" border size="small">
					<el-table-column prop="name" label="装备类别">
					</el-table-column>
					<el-table-column prop="num" label="数量">
					</el-table-column>
					<el-table-column prop="rank" label="耐久度">
					</el-table-column>
				</el-table>
				<div class="shenhe_class">
					<span @click="turn_click()" >驳回</span>
					<span @click="pass_click()" >通过</span>
				</div>
			</el-tab-pane>
		</el-tabs>
		<el-dialog title="添加装备"
			width="400px"
			:visible="equip_flag" 
			append-to-body
			@close="close_equip"
			:close-on-click-modal="false">
			<div class="adduser_parent">
				<div>
					<span>用户：</span>
					<el-input v-model="user_name" size="mini" placeholder="数字,字母或数字+字母组合"></el-input>
				</div>
				<div>
					<span>密码：</span>
					<el-input v-model="user_password" size="mini" placeholder="数字,字母或数字+字母组合"></el-input>
				</div>
				<div>
					<span>姓名：</span>
					<el-input v-model="user_real_name" size="mini" placeholder="中文,字母或中文+字母组合"></el-input>
				</div>
				<div>
					<span>类型：</span>
					<el-input v-model="user_type" size="mini" placeholder="例:1为管理员,2为普通用户"></el-input>
				</div>
				<div slot="footer" class="dialog-footer">
				    <el-button size="small" >取 消</el-button>
				    <el-button size="small" type="primary">确定</el-button>
				</div>
			</div>
		</el-dialog>
	</el-dialog>
</template>

<script>
	export default {
		name: 'equippanel',
		data() {
			return {
				user_name:"",
				user_password:"",
				user_real_name:"",
				user_type:"",
				equip_flag:false,
				active_name:"1",
				table_data: [
					{
						name: '阀门',
						num: 1,
						rank: '10%'
					}, 
					{
						name: '水管',
						num: 2,
						rank: '10%'
					}, 
					{
						name: '扳手',
						num: 3,
						rank: '10%'
					}, 
					{
						name: '斧子',
						num: 4,
						rank: '10%'
					},
					{
						name: '电钻',
						num: 5,
						rank: '10%'
					},
					{
						name: '灭火器',
						num: 6,
						rank: '10%'
					},
				]
			}
		},
		computed: {
			get_flag: function() {
				return this.$store.getters.get_equippanel_show_flag;
			}
		},
		methods: {
			//添加装备
			add_click() {
				//首先判断登录用户权限
				this.equip_flag=true;
			},
			close_equip(){
				this.equip_flag=false;
			},
			handle_click(tab, event){
				console.log(tab, event);
				console.log(tab.label);
				console.log(tab.name);
			},
			update_click(){
				
			},
			turn_click(){
				
			},
			pass_click(){
				
			},
			//关闭面板
			close_panel(){
				this.$store.commit("set_equippanel_show_flag",false);
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";

	.equippanel_parent {
		.add_class{
			width:100%;
			margin-top:5px;
			color:@common_color;
			text-align:right;
			cursor:pointer;
		}
		.shenqing_class{
			width:100%;
			margin-top:5px;
			color:@common_color;
			text-align:right;
			cursor:pointer;
		}
		.shenhe_class{
			width:100%;
			margin-top:5px;
			color:@common_color;
			text-align:right;
			cursor:pointer;
			&>span:nth-child(1){
				margin-right:10px;
				color:#ff0000;
			}
		}
		// &>div:first-child {
		// 	margin-top: 5px;
		// 	margin-bottom:10px;
		// 	font-size:15px;
		// 	line-height:15px;
		// 	@display_row_between();
		// 	&>div{
		// 		@display_row_start();
		// 		&>div:not(:first-child){
		// 			margin-left:10px;
		// 		}
		// 	}
		// 	&>span {
		// 		color: @common_color;
		// 		cursor: pointer;
		// 	}
		// }
	}
</style>
