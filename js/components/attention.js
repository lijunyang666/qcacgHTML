// 我的关注-我的关注
var attention = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">Personal attention</div><div class="titleBlock_LG">个人关注</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li class="active"  v-link="{path: \'/attention\'}"><span class="circular"></span><span class="title_name">我的关注</span></li><li  v-link="{path: \'/attentionToMe\'}"><span class="circular"></span><span class="title_name">关注我的</span></li></ul>'
      +'<div class="content"><div class="bookBlockList" ><div class="bookBlockList_title"><span class="hr"></span><span class="title">我的关注</span><span class="titleTwo">attention</span></div><div class="img-attention-head"></div><div class="attention-name"><span>huhuf5</span><span class="attention-name-sex">♂</span><div class="wordAI ">     +关注</div></div><span class="wordAI-two">许为知己犹按剑，纵使负心敌难为</span><hr style="border: 1px solid #E1E1E1; margin:20px 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="attention-name"><span>huhuf5</span><span class="attention-name-sex">♂</span><div class="wordAI ">     +关注</div></div><span class="wordAI-two">许为知己犹按剑，纵使负心敌难为</span><hr style="border: 1px solid #E1E1E1; margin:20px 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="attention-name"><span>huhuf5</span><span class="attention-name-sex">♂</span><div class="wordAI ">     +关注</div></div><span class="wordAI-two">许为知己犹按剑，纵使负心敌难为</span><hr style="border: 1px solid #E1E1E1; margin:20px 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="attention-name"><span>huhuf5</span><span class="attention-name-sex">♂</span><div class="wordAI ">     +关注</div></div><span class="wordAI-two">许为知己犹按剑，纵使负心敌难为</span><hr style="border: 1px solid #E1E1E1; margin:20px 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="attention-name"><span>huhuf5</span><span class="attention-name-sex">♂</span><div class="wordAI ">     +关注</div></div><span class="wordAI-two">许为知己犹按剑，纵使负心敌难为</span><hr style="border: 1px solid #E1E1E1; margin:20px 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="attention-name"><span>huhuf5</span><span class="attention-name-sex">♂</span><div class="wordAI ">     +关注</div></div><span class="wordAI-two">许为知己犹按剑，纵使负心敌难为</span><hr style="border: 1px solid #E1E1E1; margin:20px 0 0 5%;" width="90%" /><div class="img-attention-head"></div><div class="attention-name"><span>huhuf5</span><span class="attention-name-sex">♂</span><div class="wordAI">     +关注</div></div><span class="wordAI-two">许为知己犹按剑，纵使负心敌难为</span><hr style="border: 1px solid #E1E1E1; margin:20px 0 0 5%;" width="90%" /><div id="page" class="page"><ul><li><a>上一页</a></li><li><a>1</a></li><li class="active"><a>2</a></li><li><a>3</a></li><li><a>4</a></li><li><a>5</a></li><li><a>下一页</a></li><li class="goto"><input type="text" value="" /><span>/1211</span><a>转页</a></li></ul></div>'
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