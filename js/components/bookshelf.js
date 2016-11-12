// 我的书架-个人收藏
var bookshelf = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">bookshelf</div><div class="titleBlock_LG">个人书架</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li class="active" v-link="{path: \'/bookshelf\'}"><span class="circular"></span><span class="title_name">我的收藏</span></li><li v-link="{path: \'/record\'}"><span class="circular"></span><span class="title_name">浏览记录</span></li></ul>'
      +'<div class="content"><div class="bookBlockList" ><div class="bookBlockList_title"><span class="hr"></span><span class="title">我的收藏</span><span class="titleTwo">collect</span></div><div class="book-navAI"><img class="book-img" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /></div><span class="book-name">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><div class="book-navAI"><img class="book-img" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /></div><span class="book-name">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><div class="book-navAI"><img class="book-img" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /></div><span class="book-name">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><div class="book-navAI"><img class="book-img" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /><img class="book-img1" src="../img/90x126_2.png" /></div><span class="book-name">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span><span class="book-name1">舞法天女</span></div>'
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