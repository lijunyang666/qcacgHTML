var SZXJ = {};
Date.prototype.Format = function(fmt)   
{ //author: meizz   
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
} 
SZXJ.getLocalTime =  function(nS) { 
  var time = new Date(nS * 1000);
  return time.Format("yyyy-MM-dd hh:mm:ss");
	// return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17);
}
SZXJ.getLocalDate =  function(nS) { 
  var time = new Date(nS);
  return time.Format("yyyy-MM-dd");
	// return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17);
}
SZXJ.http = (_method, _url, _data, successfn, errorfn) => {
  if (localStorage.getItem('JSESSIONID')) {
    Vue.http.headers.common['JSESSIONID'] = localStorage.getItem('JSESSIONID');
  }
  _URL = _url;
  if (_method === 'get') {
    // _URL
    Vue.http.get(_URL, _data).then(
      (response) => {
        successfn(response);
      },
      (err) => {
        alert(err.data.msg)
        console.log(err);
        if (errorfn) {
            errorfn(err);
        }
        if(err.data.code == 900) { // 未登入
          location.href = PathList.TemprootPath + '/view/login.html';
        }
        if(err.data.code == 1000) { // 登入超时
          location.href = PathList.TemprootPath + '/view/login.html';
        }
      }
    );
  }
  // post
  if (_method === 'post') {
    // _URL
    Vue.http.post(_URL, _data).then(
      (response) => {
        successfn(response);
      },
      (err) => {
        alert(err.data.msg)
        console.log(err);
        if (errorfn) {
            errorfn(err);
        }
        if(err.data.code == 900) { // 未登入
          location.href = PathList.TemprootPath + '/view/login.html';
        }
        if(err.data.code == 1000) { // 登入超时
          location.href = PathList.TemprootPath + '/view/login.html';
        }
      }
    );
  }
  // 图片上传
  if (_method === 'upload') {
     // 
  }
};
