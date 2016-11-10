var header = Vue.extend({
  template: '<header class="qcacg-header-parent" id="qcacg-header-parent" style="position:relative">    <div class="qcacg-header">    <a :href="path.TemprootPath + \'/index.html\'"><div class="logo">轻创文学网</div></a>   <ul class="nav-left">   <li class="active"><a :href="path.TemprootPath + \'/index.html\'">首页</a></li><li><a :href="path.TemprootPath + \'/view/class.html\'">分类</a></li><li class="none"><a href="javascript:;">画师</a></li><li class="none"><a href="javascript:;">周边</a></li><li><a href="javascript:;">福利</a></li></ul><ul class="nav-right"><li><a :href="path.TemprootPath + \'/view/login.html\'">登录/注册</a></li>    <li class="publication"><a style="color:#FFFFFF"  :href="path.TemprootPath + \'/view/user_info.html\'">投&nbsp;稿</a></li></ul></div></header>',
  components: {},
  data:function(){
  	return {
  		path: PathList,
  	}
  },
  methods: {},
  route: { data() {} }
});