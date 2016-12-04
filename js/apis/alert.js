var alert = Vue.extend({
  template: 
  '<div v-if="flag" class="alert-Block">'
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
//  flag: {
//    type: Boolean,
//  }
  },
  data:function(){
    return {
      flag: false,
      trueFlag: true,
      message: '',
      Fn: 0,
    }
  },
  methods: {
    setMessage(trueFlag,message,Fn) {
      this.flag = true;
      this.trueFlag = trueFlag;
      this.message = message;
      this.Fn = Fn;
    },
    cloneMessage: function() {
      this.flag = false;
      this.trueFlag = false;
      this.message = '';
      if (this.Fn) {
        this.Fn();
      }
    }
  },
  ready: function() {
  },
  route: { data() {} }
});