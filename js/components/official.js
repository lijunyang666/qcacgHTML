// 我的消息-
var official = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">Personal message</div><div class="titleBlock_LG">个人消息</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li v-link="{path: \'/message\'}"><span class="circular"></span><span class="title_name">我的回复</span></li><li  v-link="{path: \'/tellMe\'}"><span class="circular"></span><span class="title_name">@我的</span></li><li  v-link="{path: \'/relevant\'}"><span class="circular"></span><span class="title_name">作品相关</span></li><li   v-link="{path: \'/system\'}"><span class="circular"></span><span class="title_name">系统消息</span></li><li class="active" v-link="{path: \'/official\'}"><span class="circular"></span><span class="title_name">官方公共</span></li></ul>'
      +'<div class="content"><div class="bookBlockList" ><div class="bookBlockList_title"><span class="hr"></span><span class="title">官方公共</span><span class="titleTwo">official public</span></div><div class="img-attention-word"><span class="attention-word1">您好</span><span class="attention-word2">2016/10/10</span><span class="attention-word2">12:30</span></div><p>为了提供更好的服务，我们将于北京时间7月8日凌晨6点到8点对系统进行升级，届时支付相关功能将无法使用，请勿在系统升级期间进行敏感操作，敬请见谅</p><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-word"><span class="attention-word1">您好</span><span class="attention-word2">2016/10/10</span><span class="attention-word2">12:30</span></div><p>为了提供更好的服务，我们将于北京时间7月8日凌晨6点到8点对系统进行升级，届时支付相关功能将无法使用，请勿在系统升级期间进行敏感操作，敬请见谅</p><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-word"><span class="attention-word1">您好</span><span class="attention-word2">2016/10/10</span><span class="attention-word2">12:30</span></div><p>为了提供更好的服务，我们将于北京时间7月8日凌晨6点到8点对系统进行升级，届时支付相关功能将无法使用，请勿在系统升级期间进行敏感操作，敬请见谅</p><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-word"><span class="attention-word1">您好</span><span class="attention-word2">2016/10/10</span><span class="attention-word2">12:30</span></div><p>为了提供更好的服务，我们将于北京时间7月8日凌晨6点到8点对系统进行升级，届时支付相关功能将无法使用，请勿在系统升级期间进行敏感操作，敬请见谅</p><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-word"><span class="attention-word1">您好</span><span class="attention-word2">2016/10/10</span><span class="attention-word2">12:30</span></div><p>为了提供更好的服务，我们将于北京时间7月8日凌晨6点到8点对系统进行升级，届时支付相关功能将无法使用，请勿在系统升级期间进行敏感操作，敬请见谅</p><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-word"><span class="attention-word1">您好</span><span class="attention-word2">2016/10/10</span><span class="attention-word2">12:30</span></div><p>为了提供更好的服务，我们将于北京时间7月8日凌晨6点到8点对系统进行升级，届时支付相关功能将无法使用，请勿在系统升级期间进行敏感操作，敬请见谅</p><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="img-attention-word"><span class="attention-word1">您好</span><span class="attention-word2">2016/10/10</span><span class="attention-word2">12:30</span></div><p>为了提供更好的服务，我们将于北京时间7月8日凌晨6点到8点对系统进行升级，届时支付相关功能将无法使用，请勿在系统升级期间进行敏感操作，敬请见谅</p><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div class="page-foot">    1</div><div class="page-foot2">    2</div></div>'
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