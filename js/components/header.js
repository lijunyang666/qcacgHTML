var header = Vue.extend({
  template: '<header class="qcacg-header-parent" id="qcacg-header-parent" style="position:relative"><div class="qcacg-header"><a :href="path.TemprootPath + \'/index.html\'"><div class="logo">轻创文学网</div></a>   <ul class="nav-left">   <li class="active"><a :href="path.TemprootPath + \'/index.html\'">首页</a></li><li><a :href="path.TemprootPath + \'/view/class.html\'">分类</a></li><li class="none"><a href="javascript:;">画师</a></li><li class="none"><a href="javascript:;">周边</a></li><li><a href="javascript:;">福利</a></li></ul><ul class="nav-right">'
  +'<li v-if="loginFlag" class="liBlock" :style="loginImg !== \'\' ? loginImg:\'\'"><div class="headers_display"><span><a class="display_user" :href="path.TemprootPath + \'/view/user_info.html\'">dsadas</a><a href="javascript:;" @click="backLoginFn">退出</a></span><div class="header_more"><a :href="path.TemprootPath + \'/view/user_info.html\'">查看更多</a></div></div></a></li>'
  +'<li v-else class="li_login"><a href="http://127.0.0.1:8020/ROOT/view/login.html">登录/注册</a></li>'
  +'<li class="publication"><a style="color:#FFFFFF" :href="path.TemprootPath + \'/view/user_info.html\'">投&nbsp;稿</a></li></ul></div></header>',
  components: {},
  data:function(){
  	return {
  		path: PathList,
  		loginFlag: false,
  		loginImg: '',
  	}
  },
  methods: {
    backLoginFn: function() {
      this.loginFlag = false;
      console.log(localStorage.getItem('JSESSIONID'));
      localStorage.removeItem('JSESSIONID');
      console.log(localStorage.getItem('JSESSIONID'));
    }
  },
  ready: function() {
    SZXJ.http('get', PathList.getIndexData, {}, (response) => {
      this.loginImg = 'background-image: url('+ this.path.TemprootPath +'/img/50x50-tou.jpg)';
      console.log(response);
      this.loginFlag = true;
    });
  },
  route: { data() {} }
});






