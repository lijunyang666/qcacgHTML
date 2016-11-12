// 个人信息-基本信息
var info = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">contribute</div><div class="titleBlock_LG">个人投稿</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li class="active" v-link="{path: \'/info\'}"><span class="circular"></span><span class="title_name">我的信息</span></li><li v-link="{path: \'/updatePass\'}"><span class="circular"></span><span class="title_name">修改密码</span></li></ul>'
      +'<div class="content"><div class="bookBlockList"><div class="bookBlockList_title"><span class="hr"></span><span class="title">基本信息</span><span class="titleTwo">essential information</span></div><div class="portrait"></div><div class="messageAI"><div class="up"><span class="up-name">huhuf5</span><span>uid:45456</span><span class="up-word">关注：1000</span><span class="up-word">粉丝：1000</span><span class="up-word">好人卡：1222</span></div><div class="centreAI"><img class="imgAI1" src="" /><span class="font">注册于<span class="font">2016/10/10</span></span></div><div class="downAI"><span>简介：</span><input type="text" name="" id="" value="我有一头小毛驴我从来也不骑" size="30" style="border: none;" /><img src="../img/新个人信息_14.jpg" /></div></div><hr style="border: 1px dotted #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="change">     更换头像</div></div><div class="bookBlockList"><div class="bookBlockList_title"><span class="hr"></span><span class="title">详细信息</span><span class="titleTwo">detailed information</span></div><div class="nameAI"><span class="name1">昵称：</span><input type="" name="" id="" value="huhuf5" /><span class="remarkAI">注： 修改名称需要600张好人卡</span></div><div class="sexAI"><span class="name1">性别：</span><label class="butt"><input type="radio" name="sex" id="" value="" />男</label><label class="butt"><input type="radio" name="sex" id="" value="" />女</label></div><div class="birthday"><span class="name1">生日：</span></div><div class="numberAI"><span class="name1">手机号码：</span><input type="" name="" id="" value="1231****" style="border: none;" /><span class="remarkAI">注： 手机号码暂不支持修改</span></div><hr style="width:90%;border: 1px dotted #E1E1E1 ; margin:20px 0 0 5%;"/><div class="change2">修改</div></div>'
      +'</div></div></div>'
      ,
      data: function() {
        return {
        	showFlag: 1,
        };
      },
      route: {
        data() {
          
        } 
      },
      methods: {
      	setShowFlagFn: function(v) {
			this.showFlag = v;
		},
        getBookListFn: function() {
          var _data = {};
          SZXJ.http('get', PathList.findBookByUser, {}, (response) => {
            this.$set('bookList', response.data);
          });
        },
      },
      ready : function (){
      	
      },
   });