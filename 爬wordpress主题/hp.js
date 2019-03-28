const request = require('request');
const fs = require('fs');

function getData(page, cb) {
  const options = {
    method: 'GET',
    url: `https://api.wordpress.org/themes/info/1.1/?callback=jQuery112409506859854027063_1541418825141&action=query_themes&request[per_page]=24&request[locale]=en_CA&request[fields][description]=true&request[fields][sections]=false&request[fields][tested]=true&request[fields][requires]=true&request[fields][downloaded]=false&request[fields][downloadlink]=true&request[fields][last_updated]=true&request[fields][homepage]=true&request[fields][theme_url]=true&request[fields][parent]=true&request[fields][tags]=true&request[fields][rating]=true&request[fields][ratings]=true&request[fields][num_ratings]=true&request[fields][extended_author]=true&request[fields][photon_screenshots]=true&request[fields][active_installs]=true&request[browse]=popular&request[page]=${page}&_=1541418825149`,
    // qs: {
    // },
    headers: {
      'postman-token': 'f891e8e1-5bb3-081a-d1bf-8fff4cc975a8',
      'cache-control': 'no-cache',
      'private-token': 'KYLdGhy-sRk66LCb7-ap',
      'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
    },
    // formData: { description: 'test' },
  };
  return request(options, (error, response, body) => {
    if (error) throw new Error(error);
    if (body) {
      try {
        const start = body.indexOf('(') + 1;
        const str = body.slice(start, body.length - 2);
        const json = JSON.parse(str);
        if (cb && json) {
          cb(json);
        }
      } catch (e) {
        console.log(111, 'json 解析出错');
      }
    }
  });
}

function main() {
  getData(1, (data) => {
    const pages = data.info.pages;
    const arr = data.themes;
    let j = 0;
    for (let i = 2; i <= pages; i++) {
      getData(i, (data1) => {
        j++;
        Array.prototype.push.apply(arr, data1.themes);
        if (j === pages - 2 + 1) {
          console.log(333, arr);

        }
      });
    }
  });
}

main();
