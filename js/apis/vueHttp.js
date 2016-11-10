var SZXJ = {};
SZXJ.http = (_method, _url, _data, successfn, errorfn) => {
  Vue.http.headers.common['JSESSIONID'] = localStorage.getItem('JSESSIONID');
  _URL = _url;
  // 判断是否是本地调试
  if (document.domain === '127.0.0.1' || document.domain === 'localhost') {
    if (_method !== 'pldelete') {
      // _URL = _url.concat('?x=renren2016whosyourdaddy');
    }
  } else {
    if (_method === 'pldelete') {
      _URL = _url.substring(0, _url.lastIndexOf('x='));
    }
  }
  if (_method === 'get') {
    // _URL
    console.log('get');
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
  // delete
  if (_method === 'delete') {
    Vue.http.delete(_URL, _data).then(
      (response) => {
        console.log('200:');
        successfn(response);
      },
      (err) => {
        console.log('500:'.concat(err.data.code).concat(':').concat(err.data.msg));
        console.log(err.data.code.toString().substring(0, 1));
        if (err.data.code.toString().substring(0, 1) === '8') { // 登陆信息错误 请尝试重新登陆
          localStorage.removeItem('indexLogin');
          location.href = '/';
        }
        errorfn(err);
      }
    );
  }
  if (_method === 'pldelete') {
    Vue.http.delete(_URL, _data).then(
      (response) => {
        console.log('200:');
        successfn(response);
      },
      (err) => {
        console.log('500:'.concat(err.data.code).concat(':').concat(err.data.msg));
        console.log(err.data.code.toString().substring(0, 1));
        if (err.data.code.toString().substring(0, 1) === '8') { // 登陆信息错误 请尝试重新登陆
          localStorage.removeItem('indexLogin');
          location.href = '/';
        }
        errorfn(err);
      }
    );
  }
  // put
  if (_method === 'put') {
    Vue.http.put(_URL, _data).then(
      (response) => {
        console.log('200:');
        successfn(response);
      },
      (err) => {
        console.log('500:'.concat(err.data.code).concat(':').concat(err.data.msg));
        console.log(err.data.code.toString().substring(0, 1));
        if (err.data.code.toString().substring(0, 1) === '8') { // 登陆信息错误 请尝试重新登陆
          localStorage.removeItem('indexLogin');
          location.href = '/';
        }
        errorfn(err);
      }
    );
  }
  if (_method === 'upload') {
    post(_url, _data, successfn, errorfn);
  }
};
