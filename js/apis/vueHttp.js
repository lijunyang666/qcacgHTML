var SZXJ = {};

SZXJ.getLocalTime =  function(nS) { 
	return new Date(parseInt(nS) * 1000).toLocaleString().substr(0,17)
}

SZXJ.http = (_method, _url, _data, successfn, errorfn) => {
  Vue.http.headers.common['JSESSIONID'] = localStorage.getItem('JSESSIONID');
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
      }
    );
  }
  // 图片上传
  if (_method === 'upload') {
     // 
  }
};
