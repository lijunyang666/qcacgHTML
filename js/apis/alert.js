var alert = Vue.extend({
  template: 
  '<div v-if="" class="alert-Block">'
    +  '<div class="alert_parent">'
    +   '<div class="alert_sub">'
    +     '<div class="words">'
    +         '<div v-if="trueFlag" class="alert_img"><img src="../img/alert_flast.png" /></div>'
    +         '<div v-else class="alert_img"><img src="../img/alert_ture.png" /></div>'
    +         '<ul>'
    +           '<li v-if="trueFlag" class="alert">操作失败</li>'
    +           '<li v-else class="alert3">操作成功</li>'
    +           '<li class="alertToo">{{ message }}</li>'
    +         '</ul>'
    +         '<div class="clear"></div>'
    +      '</div>'
    +      '<div class="alert_foot btn" @click="cloneMessage">确认</div>'
    +    '</div>'
    +  '</div>'
    +'</div>',
  components: {},
  props: {
    flag: {
      type: Boolean,
    }
  },
  data:function(){
    return {
      trueFlag: false,
      message: '',
    }
  },
  methods: {
    setMessage(flag,trueFlag,message) {
      this.flag = flag;
      this.trueFlag = trueFlag;
      this.message = message;
    },
    cloneMessage: function() {
      this.flag = false;
      this.trueFlag = false;
      this.message = '';
    }
  },
  ready: function() {
  },
  route: { data() {} }
});