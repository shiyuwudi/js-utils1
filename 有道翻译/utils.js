/**
 * 汉字转拼音
 * @param {*} text 
 */
function transPinyin(text) {
  const pinyin = require("pinyin");
  const input = ["省", "市", "区", "县"].includes(text[text.length - 1]) ? text.slice(0, text.length -1): text;
  const arr = pinyin(input, {
    style: pinyin.STYLE_NORMAL,
  });
  const result = arr.reduce((r, e) => r + firstLetterUpperCase(e[0]), '');
  return result;
}

/**
 * 首字母大写
 * @param {*} str 
 */
function firstLetterUpperCase(str) {
  return str.substring(0,1).toUpperCase()+str.substring(1);
}

// 调用有道API
function translateYoudao(q, cb) {
  const md5 = require('md5');
  const request = require('request');
  
  const appKey = '25389e599d3557e7';
  const salt = '10';
  const appSecret = 'Og0SxaOuwAxe2qnK0DseReFG7Fk4vUKZ';
  const sign = md5(appKey + q + salt + appSecret).toUpperCase();
  const options = { method: 'GET',
    url: 'http://openapi.youdao.com/api',
    qs:
      {
        q,
        from: 'EN',
        to: 'zh-CHS',
        appKey,
        salt,
        // 签名，通过md5(appKey+q+salt+应用密钥)生成
        sign,
      },
    headers:
      { 'postman-token': 'f891e8e1-5bb3-081a-d1bf-8fff4cc975a8',
        'cache-control': 'no-cache',
        'private-token': 'KYLdGhy-sRk66LCb7-ap',
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' },
    formData: { description: 'test' } };

  request(options, (error, response, body) => {
    if (error) throw new Error(error);
    // console.log(body);
    if (body) {
      try {
        const json = JSON.parse(body);
        if (json && json.translation && Array.isArray(json.translation) && json.translation.length > 0) {
          const result = json.translation[0];
          if (cb && result) {
            cb(result);
          }
        }
      } catch (e) {
        console.log(111, 'json 解析出错');
      }
    }
  });
}