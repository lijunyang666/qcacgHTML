// // 投稿-第三页 显示作者作品目录页
   var catalogue = Vue.extend({
      template: 
      '<div class="user_info_right"><div class="user_info_title"><div class="titleBlock">contribute</div><div class="titleBlock_LG">个人投稿</div></div><div class="user_info_content"><div class="contribution">'
      +'<ul class="nav"><li v-link="{path: \'/bookBlockList\'}"><span class="circular"></span><span class="title_name">轻小说</span></li><li v-if="showFlag === 999"><span class="circular"></span><span class="title_name">画集</span></li><li v-link="{path: \'/works\'}"><span class="circular"></span><span class="title_name">创建作品</span></li></ul>'
      +'<div class="content"><div class="catalogue"><div class="catalogue_header"><span>作品目录</span><span>catalogue</span><a href=""><p><img src="../img/list_up.jpg" /><span>收起</span></p><p><img src="../img/list_up2.jpg" /><span>收起</span></p></a></div><div class="newBookChapter" v-if="newBookChapter"><div class="clearX" v-on:click="newBookChapterClearFn">x</div><h4 class="newBookTitle">请输入卷的标题</h4><div><input type="text" class="inputText" placeholder="第一卷" v-model="volume" /></div><div class="hr"></div><a href="javascript:;" class="btn btn-addBookChapter" v-on:click="submitVolumeFn">提交</a></div><div class="catalogue_list" v-for="obj in volumeCustomList"><div class="list_title"><h4 class="listBlock">{{obj.volumeName}}</h4><div class="list_action"><a href="">前移</a><a href="">后移</a><a href="">删除</a><a href="">重命名</a></div></div><div class="create_chapter"><div class="chapter_header clear"><div class="line" v-for="bookObj in obj.contentEntityList"> <div class="lineIcon"><img src="../img/chapter_icon.jpg" /> <div class="handle_left">   <p><img src="../img/to_right.jpg" /> 章节前移</p><p><img src="../img/to_right.jpg" /> 章节后移</p><p><img src="../img/to_right.jpg" /> 删除章节</p>   <p><img src="../img/to_right.jpg" /> 重命名</p>  </div></div><span class="span" uid="{{bookObj.volumeId}}"  uid2="{{bookObj.contentId}}" v-link="{path: \'/chapter_edit/\' + bookObj.volumeId + \'_\' +  bookObj.contentId }">{{bookObj.contentTitle}}</span></div><div class="line"><div class="lineIcon"><img src="../img/create_icon.jpg" />              </div>              <span class="span" uid="{{obj.volumeId}}" v-link="{ path: \'/chapter/\' + obj.volumeId }">创建新章节</span></div></div></div></div><div class="chapter_handle"><div class="handle_right"><div><span class="btn" v-on:click="newBookChapterFn">新增卷</span><span class="btn">提交审核</span></div></div></div></div><div class="chapter"><span>章节</span><span>chapter</span><a href="javascript:;"><p><img src="../img/list_up.jpg"><span>收起</span></p><p><img src="../img/list_up2.jpg"><span>收起</span></p></a></div><div class="work_information"><span>作品信息</span><span>work information</span><a href="javascript:;"><p><img src="../img/list_up.jpg"><span>收起</span></p><p><img src="../img/list_up2.jpg"><span>收起</span></p></a></div></div></div>'
      +'</div></div></div>'	
    ,data: function() {
        return {
        volumeCustomList: [],
        newBookChapter:false,
        id: '',
        volume: '',
        };
      }
    ,route: { 
        data() {
          this.getBookListFn();
        } 
      }
      ,methods: {
        getBookListFn: function() {
            var href = window.location.href;
            this.id = href.substring(href.lastIndexOf('/') + 1, href.length);
            var _data = {};
            _data.bookId = parseInt(this.id, 10);
            SZXJ.http('get', PathList.queryBook, _data, 
            (response) => {
            	console.log(response);
                this.$set('volumeCustomList', response.data.bookCustom.volumeCustomList);
            });
        },
        newBookChapterFn: function() {
          this.$set('newBookChapter', true);
        },
        newBookChapterClearFn: function() {
          this.$set('newBookChapter', false);
        },
        submitVolumeFn: function() {
          var _data = {};
          _data.bookId = parseInt(this.id, 10);
          _data.volumeName = this.volume;
          _data.volumeId = '';
          SZXJ.http('post', PathList.saveOrUpdateVolume, _data, 
            (response) => {
              this.$set('newBookChapter', false);
              this.getBookListFn();
            });
        }
      }
   });