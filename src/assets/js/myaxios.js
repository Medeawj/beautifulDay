import axios from 'axios'
// var url = 'http://127.0.0.1:80/test/'
var url= 'http://if.666read.com/'
var myaxios = axios.create({
  baseURL: url, 
  transformRequest: [function (data) {
    let ret = ''
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }]
})
export default myaxios
