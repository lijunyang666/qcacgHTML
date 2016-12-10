// 我的消息-
var tellMe = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">Personal message</div><div class="titleBlock_LG">个人消息</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li v-link="{path: \'/message\'}"><span class="circular"></span><span class="title_name">我的回复</span></li><li class="active" v-link="{path: \'/tellMe\'}"><span class="circular"></span><span class="title_name">@我的</span></li><li  v-link="{path: \'/relevant\'}"><span class="circular"></span><span class="title_name">作品相关</span></li><li  v-link="{path: \'/system\'}"><span class="circular"></span><span class="title_name">系统消息</span></li><li  v-link="{path: \'/official\'}"><span class="circular"></span><span class="title_name">官方公共</span></li></ul>'
      +'<div class="content"><div class="bookBlockList"><div class="bookBlockList_title"><span class="hr"></span><span class="title">@我的</span><span class="titleTwo">work related</span></div><hr style="border: 1px solid #E1E1E1; margin:0 0 0 5%;" width="90%" /><div id="page" class="page"><ul><li><a>上一页</a></li><li><a>1</a></li><li class="active"><a>2</a></li><li><a>3</a></li><li><a>4</a></li><li><a>5</a></li><li><a>下一页</a></li><li class="goto"><input type="text" value="" /><span>/1211</span><a>转页</a></li></ul></div>'
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
          SZXJ.http(this,'get', PathList.findBookByUser, {}, (response) => {
            this.$set('bookList', response.data);
          });
        },
      },
      ready : function (){
      	
      },
   });