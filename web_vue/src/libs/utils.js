// 生成唯一ID
export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0;
    var v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// 全局判断是否IOS方法
export function isIos() {
  const u = navigator.userAgent;
  return u.indexOf('iPhone') > -1 || u.indexOf('Mac OS') > -1;
}

// 判断是什么终端打开
export function isAlipayOrWechat() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.match(/Alipay/i) === 'alipay') {
    return 'ali';
  }
  if (userAgent.match(/MicroMessenger/i) === 'micromessenger') {
    return 'wx';
  }
  return 'default';
}

// 获取url的参数
export function getQueryString(url) {
  if (url) {
    url = url.substr(url.indexOf('?'));
  } else {
    url = location.search; // 获取url中"?"符后的字串
  }
  var theRequest = {};
  if (url.indexOf('?') !== -1) {
    var str = url.substr(1);
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1]);
    }
  }
  return theRequest;
}

export function sleep(fn, time, ...rest) {
  return new Promise(async resolve => {
    let startTime = +new Date();
    let result = await fn(...rest);
    let endTime = +new Date();
    let timeDiff = endTime - startTime - time;
    if (timeDiff > 0) {
      resolve(result);
    } else {
      setTimeout(() => {
        resolve(result);
      }, Math.abs(timeDiff));
    }
  });
}

// 返回驼峰形式
// scroll-end scrollEnd
export function camelize(str) {
  str = String(str);
  const camelizeRE = /-(\w)/g;
  return str.replace(camelizeRE, function(m, c) {
    return c ? c.toUpperCase() : '';
  });
}

// 节流
export function throttle(fn, wait) {
  let previous = 0;
  return function() {
    let now = new Date().getTime();
    if (now - previous > wait) {
      fn.apply(this, arguments);
      previous = now;
    }
  };
}

export function dealObjectValue(obj, arr) {
  let params = {};
  let whiteList = [null, undefined, '', NaN];
  if (arguments.length === 2) {
    if (typeof arr === 'string' && whiteList.includes(arr)) {
      var index = whiteList.indexOf(arr);
      whiteList.splice(index, 1);
    }
    if (Array.isArray(arr)) {
      arr.forEach((item, index) => {
        console.log(item);
        whiteList.includes(item) && whiteList.splice(index, 1);
      });
    }
  }
  Object.keys(obj).forEach(key => {
    let value = obj[key];
    if (Array.isArray(value)) {
      if (value.length > 0) {
        params[key] = value;
      }
    } else {
      if (!whiteList.includes(value)) {
        params[key] = value;
      }
    }
  });
  return params;
}
export function formaterMoney(money){
  if(money && money!=null){
      money = String(money);
      var left=money.split('.')[0],right=money.split('.')[1];
      right = right ? (right.length>=2 ? '.'+right.substr(0,2) : '.'+right+'0') : '.00';
      var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
      return (Number(money)<0?"-":"") + temp.join(',').split('').reverse().join('')+right;
  }else if(money===0){   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
      return '0.00';
  }else{
      return "";
  }
};


