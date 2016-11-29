// 个人信息-基本信息
var info = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">contribute</div><div class="titleBlock_LG">个人投稿</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li class="active" v-link="{path: \'/info\'}"><span class="circular"></span><span class="title_name">我的信息</span></li><li v-link="{path: \'/updatePass\'}"><span class="circular"></span><span class="title_name">修改密码</span></li></ul>'
      +'<div class="content"><div class="bookBlockList"><div class="bookBlockList_title"><span class="hr"></span><span class="title">基本信息</span><span class="titleTwo">essential information</span></div><div class="portrait"></div><div class="messageAI"><div class="up"><span class="up-name ">{{ userInfoList.userName }}</span><span>uid:&nbsp;{{ userInfoList.userId }}</span><span class="up-word">关注：1000</span><span class="up-word">粉丝：1000</span><span class="up-word">好人卡：1222</span></div><div class="centreAI"><img class="imgAI1" src="../img/新个人信息_09.gif"/><span class="font">注册于<span class="font">{{ szxj.getLocalDate(userInfoList.createDate) }}</span></span></div><div class="downAI"><span>简介：</span>'
      +'<input type="text" v-model="userInfoList.information" v-if="inputFlag"  placeholder="最多保存30个字符" style="width:440PX;margin-right:20px;padding-left:10px" />'
      +'<input type="text" v-model="userInfoList.information" v-else placeholder="请输入个人简介" style="width:440PX;margin-right:20px;padding-left:10px;border: 2px solid rgba(0,0,0,0);" readonly="readonly" />'
      +'<img src="../img/新个人信息_14.jpg" style="cursor:pointer" @click="setInputFlag" /></div></div><hr style="border: 1px dotted #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="change btn">     更换头像</div></div>'
      +'<div class="bookBlockList relative"><div v-if="infoFlag" style="position: absolute;top: 0px;left: 0px;bottom:0px;right: 0px;width: 100%;height: 230px;z-index: 999999;"></div><div class="bookBlockList_title"><span class="hr"></span><span class="title">详细信息</span><span class="titleTwo">detailed information</span></div>'
      +'<div class="nameAI"><span class="name1">昵称：</span><input type="text" v-model="userName" /><span class="remarkAI">注： 修改名称需要600张好人卡</span></div><div class="sexAI"><span class="name1">性别：</span><label class="butt"><input type="radio" name="sex" v-model="userInfoList.sex"  value="男生" />男</label><label class="butt"><input type="radio" name="sex" value="女生" v-model="userInfoList.sex" />女</label></div><div class="birthday"><span class="name1">生日：</span><input type="text" readonly="readonly" placeholder="请选择生日时间" v-model="userInfoList.birthday" /></div><div class="numberAI"><span class="name1">手机号码：</span><input type="text" v-model="userInfoList.telephone" style="border: none;" /><span class="remarkAI">注： 手机号码暂不支持修改</span></div><hr style="width:90%;border: 1px dotted #E1E1E1 ; margin:20px 0 0 5%;"/>'
      +'<div class="change2 btn" v-if="infoFlag" @click="setInfoFlag">修改</div><div class="change2 btn" v-else @click="submitInfoFlag">保存</div></div>'
      +'</div></div></div>'
      ,
      data: function() {
        return {
        	showFlag: 1,
        	inputFlag: false,
        	infoFlag: true, // 个人信息修改哪里的遮罩层
        	userInfoList: {},
        	szxj: SZXJ,
        	userName: '',
        };
      },
      route: {
        data() {
          this.getBookListFn();
        } 
      },
      methods: {
      	setInfoFlag: function(v) {
      		this.infoFlag = false;
      	},
      	submitInfoFlag: function(v) {
      		var _data = {};
      		_data.userName = this.userName;
      		_data.birthday = this.userInfoList.birthday;
      		if (this.userInfoList.sex === '男生') {
      			_data.sex = 2;
      		} else {
      			_data.sex = 1;
      		}
      		_data.Information = this.userInfoList.information;
      		SZXJ.http('post', PathList.updateUser, _data, (response) => {
            if (response.data === 'success') {
            	this.infoFlag = true;
            	this.getBookListFn();
            }
          });
      	},
      	setInputFlag: function(v) {
      		if (this.inputFlag) {
      			this.inputFlag = false;
      		} else {
      			this.inputFlag = true;
      		}
      	},
	      setShowFlagFn: function(v) {
					this.showFlag = v;
				},
        getBookListFn: function() {
          var _data = {};
          SZXJ.http('get', PathList.queryUser, {}, (response) => {
          	this.userInfoList = response.data;
          	this.userName = this.userInfoList.userName;
            console.log(response);
          });
        },
      },
      ready : function (){
      	
      },
   });