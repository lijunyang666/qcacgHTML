// 我的消息-
var message = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">Personal message</div><div class="titleBlock_LG">个人消息</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li class="active"  v-link="{path: \'/message\'}"><span class="circular"></span><span class="title_name">我的回复</span></li><li  v-link="{path: \'/tellMe\'}"><span class="circular"></span><span class="title_name">@我的</span></li><li  v-link="{path: \'/relevant\'}"><span class="circular"></span><span class="title_name">作品相关</span></li><li  v-link="{path: \'/system\'}"><span class="circular"></span><span class="title_name">系统消息</span></li><li  v-link="{path: \'/official\'}"><span class="circular"></span><span class="title_name">官方公共</span></li></ul>'
      +'<div class="content"><div class="bookBlockList" ><div class="bookBlockList_title"><span class="hr"></span><span class="title">回复我的</span><span class="titleTwo">essential information</span></div><div class="img-attention-head"></div><div class="replyAI"><div><span class="word1">2016/10/10</span><span class="word1">12:30</span><span class="word2">查看详情</span></div><div class="replyAI1"><span class="word-name">huhuf5</span>回复你：再闹打屁屁</div><div class="replyAI2">     你回复<span class="word-name">huhuf5</span>：打你奶奶个腿儿<span class="word-time">今天 12：31</span></div><div class="replyAI2"><span class="word-name">huhuf5</span>回复你：再闹打屁屁<span class="word-time">今天 12：31</span><span class="word-time">回复</span></div></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="replyAI"><div><span class="word1">2016/10/10</span><span class="word1">12:30</span><span class="word2">查看详情</span></div><div class="replyAI1"><span class="word-name">huhuf5</span>回复你：再闹打屁屁</div><div class="replyAI2">     你回复<span class="word-name">huhuf5</span>：打你奶奶个腿儿<span class="word-time">今天 12：31</span></div><div class="replyAI2"><span class="word-name">huhuf5</span>回复你：再闹打屁屁<span class="word-time">今天 12：31</span><span class="word-time">回复</span></div></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="replyAI"><div><span class="word1">2016/10/10</span><span class="word1">12:30</span><span class="word2">查看详情</span></div><div class="replyAI1"><span class="word-name">huhuf5</span>回复你：再闹打屁屁</div><div class="replyAI2">     你回复<span class="word-name">huhuf5</span>：打你奶奶个腿儿<span class="word-time">今天 12：31</span></div><div class="replyAI2"><span class="word-name">huhuf5</span>回复你：再闹打屁屁<span class="word-time">今天 12：31</span><span class="word-time">回复</span></div></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="replyAI"><div><span class="word1">2016/10/10</span><span class="word1">12:30</span><span class="word2">查看详情</span></div><div class="replyAI1"><span class="word-name">huhuf5</span>回复你：再闹打屁屁</div><div class="replyAI2">     你回复<span class="word-name">huhuf5</span>：打你奶奶个腿儿<span class="word-time">今天 12：31</span></div><div class="replyAI2"><span class="word-name">huhuf5</span>回复你：再闹打屁屁<span class="word-time">今天 12：31</span><span class="word-time">回复</span></div></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="replyAI"><div><span class="word1">2016/10/10</span><span class="word1">12:30</span><span class="word2">查看详情</span></div><div class="replyAI1"><span class="word-name">huhuf5</span>回复你：再闹打屁屁</div><div class="replyAI2">     你回复<span class="word-name">huhuf5</span>：打你奶奶个腿儿<span class="word-time">今天 12：31</span></div><div class="replyAI2"><span class="word-name">huhuf5</span>回复你：再闹打屁屁<span class="word-time">今天 12：31</span><span class="word-time">回复</span></div></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="replyAI"><div><span class="word1">2016/10/10</span><span class="word1">12:30</span><span class="word2">查看详情</span></div><div class="replyAI1"><span class="word-name">huhuf5</span>回复你：再闹打屁屁</div><div class="replyAI2">     你回复<span class="word-name">huhuf5</span>：打你奶奶个腿儿<span class="word-time">今天 12：31</span></div><div class="replyAI2"><span class="word-name">huhuf5</span>回复你：再闹打屁屁<span class="word-time">今天 12：31</span><span class="word-time">回复</span></div></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="replyAI"><div><span class="word1">2016/10/10</span><span class="word1">12:30</span><span class="word2">查看详情</span></div><div class="replyAI1"><span class="word-name">huhuf5</span>回复你：再闹打屁屁</div><div class="replyAI2">     你回复<span class="word-name">huhuf5</span>：打你奶奶个腿儿<span class="word-time">今天 12：31</span></div><div class="replyAI2"><span class="word-name">huhuf5</span>回复你：再闹打屁屁<span class="word-time">今天 12：31</span><span class="word-time">回复</span></div></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="page-foot">    1</div><div class="page-foot2">    2</div></div>'
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