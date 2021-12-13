<template>
	<el-dialog title="人员管理" class="userpanel_parent" :visible="get_flag" append-to-body @close="close_panel"
		:close-on-click-modal="false">
		<el-table :data="get_datas" height="300" border size="small">
			<el-table-column prop="nickname" label="姓名">
			</el-table-column>
			<el-table-column prop="sex" label="性别">
			</el-table-column>
			<el-table-column label="管理员">
				<template slot-scope="scope">
					<span v-if="scope.row.isadmin==0||scope.row.isadmin==1" :class="[{'el-icon-success':scope.row.isadmin==1,'el-icon-error':scope.row.isadmin==0}]"></span>
				</template>
			</el-table-column>
			<el-table-column label="联系人">
				<template slot-scope="scope">
					<span v-if="scope.row.islinkman==0||scope.row.islinkman==1" :class="[{'el-icon-success':scope.row.islinkman==1,'el-icon-error':scope.row.islinkman==0}]"></span>
				</template>
			</el-table-column>
			<el-table-column label="审核员">
				<template slot-scope="scope">
					<span v-if="scope.row.ischeckman==0||scope.row.ischeckman==1" :class="[{'el-icon-success':scope.row.ischeckman==1,'el-icon-error':scope.row.ischeckman==0}]"></span>
				</template>
			</el-table-column>
			<el-table-column label="在位">
				<template slot-scope="scope">
					<span v-if="scope.row.iszw==0||scope.row.iszw==1" :class="[{'el-icon-success':scope.row.iszw==1,'el-icon-error':scope.row.iszw==0}]"></span>
				</template>
			</el-table-column>
			<el-table-column prop="tel" label="电话">
			</el-table-column>
		</el-table>
		<div class="add_class">
			<span @click="add_click()">添加人员</span>
		</div>
		<el-dialog title="添加人员" width="400px" :visible="adduser_flag" append-to-body @close="close_adduser"
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
					<el-button size="small" @click="close_adduser">取 消</el-button>
					<el-button size="small" type="primary">确定</el-button>
				</div>
			</div>
		</el-dialog>
	</el-dialog>
</template>

<script>
	export default {
		name: 'userpanel',
		data() {
			return {
				adduser_flag: false,
				user_name: "",
				user_password: "",
				user_real_name: "",
				user_type: "",
			}
		},
		computed: {
			get_flag: function() {
				return this.$store.getters.get_userpanel_show_flag;
			},
			get_datas: function() {
				console.log(this.$store.getters.get_users_info);
				return this.$store.getters.get_users_info;
			},

		},
		methods: {
			//添加用户
			add_click() {
				this.adduser_flag = true;
			},
			//关闭面板
			close_panel() {
				this.$store.commit("set_userpanel_show_flag", false);
			},
			//关闭添加人员面板
			close_adduser() {
				this.adduser_flag = false;
			}
		},
	}
</script>

<style lang="less">
	//引入全局样式
	@import "../assets/less/style.less";

	.userpanel_parent {
		.add_class {
			width: 100%;
			margin-top: 10px;
			color: @common_color;
			text-align: right;
			cursor: pointer;
		}
	}

	.adduser_parent {
		@display_column_start();

		&>div {
			@display_row_start();
			margin-top: 10px;

			&>span {
				margin-right: 5px;
			}
		}

		.dialog-footer {
			@display_row_end();
		}
	}
</style>
