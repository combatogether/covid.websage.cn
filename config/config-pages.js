/*
* @Author: cs_victor
* @Date:   2016-07-16 17:50:31
* @Last Modified by:   cs_victor
* @Last Modified time: 2016-07-17 13:37:55
*/
/**
 * 配置要生成和压缩的页面
 * 如果页面全名是  xxx.html	  ,yyy.html
 * 则			   page:xxx   ,page:yyy
 * 后面的data是给page页面提供数据用的
 * data:{ title: 'index' }   在ejs模板里直接   <%= title %>
 */

const data1 = require('./data1');
const data2 = require('./data2');
const data3 = require('./data3');
const data4 = require('./data4');
const data5 = require('./data5');

function handlerData(data) {
    let d = data
    .replace(/"/g, "")
    .split('\na')
    .filter(item => item != '')
    .map(item => item.split('\t'));
    return d;
}

function handlerDataOther(data) {
    let d = data
    // .replace(/"/g, "")
    .split('\n')
    .filter(item => item != '')
    .map(item => item.split('\t'));
    return d;
}

function toKeyValue(data = []) {
    let result = {};
    for(let i=0; i<data.length; i++){
        result[data[i][0]] = data[i];
    }
    return result;
}

const otherData = toKeyValue(handlerDataOther(data5))
// console.log(handlerData(data1))

 module.exports = [
    // { page: '', view: 'page1', data: { title: '1111' } },


    // { page: 'index', view: 'index', data: { title: '1111', data: handlerData(data1) , otherData, lang: 'cn', index: 1} },
    { page: 'cn/index_1', view: 'index', data: { title: '1111', data: handlerData(data1) , otherData, lang: 'cn', index: 1} },
    { page: 'cn/index_2', view: 'index', data: { title: '1111', data: handlerData(data2) , otherData, lang: 'cn', index: 2} },
    { page: 'cn/index_3', view: 'index', data: { title: '1111', data: handlerData(data3) , otherData, lang: 'cn', index: 3} },
    { page: 'cn/index_4', view: 'index', data: { title: '1111', data: handlerData(data4) , otherData, lang: 'cn', index: 4} },

    { page: 'index', view: 'index', data: { title: '1111', data: handlerData(data1) , otherData, lang: 'en', index: 1} },
    { page: 'en/index_1', view: 'index', data: { title: '1111', data: handlerData(data1) , otherData, lang: 'en', index: 1} },
    { page: 'en/index_2', view: 'index', data: { title: '1111', data: handlerData(data2) , otherData, lang: 'en', index: 2} },
    { page: 'en/index_3', view: 'index', data: { title: '1111', data: handlerData(data3) , otherData, lang: 'en', index: 3} },
    { page: 'en/index_4', view: 'index', data: { title: '1111', data: handlerData(data4) , otherData, lang: 'en', index: 4} },
    { page: 'en/article_1', view: 'index', data: { title: '1111', data: require('./data_article_1') , otherData, lang: 'en', index: 5} },
    // { page: 'en/article/1', view: 'article', data: { title: '1111', data: null , otherData, lang: 'en', index: 5} },


    // { page: 'en/index', view: 'index', data: { title: '222' } },
    // { page: 'login', data: { title: 'login' } },
    // { page: '404', data: { title: '404' } },
    // { page: 'admin/dashboard', data: { title: 'admin/dashboard' } },
    // { page: 'admin/report', data: { title: 'admin/report' } },
    // { page: 'activity/first', data: { title: 'activity/first' } },
    // { page: 'activity/second', data: { title: 'activity/second' } }
];
