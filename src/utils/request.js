import axios from 'axios'
import router from '../router'
import store from '../store'
import constant from './constant'
import qs from 'qs'
import Vue from 'vue'

let axiosUtil = axios.create({
  timeout: 2500
})

axiosUtil.interceptors.response.use(
  response => {
    if (Vue.$vux.loading.isVisible()) {
      Vue.$vux.loading.hide()
    }
    return response;
  },
  error => {
    if (Vue.$vux.loading.isVisible()) {
      Vue.$vux.loading.hide()
    }
    console.log('error.response', error.response)
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          localStorage.clear();
          router.push({
            path: '/user/login',
          });
          break;
      }
      return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }else{
      return Promise.reject({msg:'网络连接超时'}) // 返回接口返回的错误信息
    }
  });

function request(method) {
  return async function (url, data = {}) {
    let options = {
      method: method,
      url: url,
      data: qs.stringify(data),
      headers: {
        // 'content-type': 'application/json',
        // 'authorization': `${localStorage.getItem(constant.AUTHORIZATION_KEY)}`
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }
    return await axiosUtil(options).then((res) => {
      if (res.data.code === 5000) { // tokan过期
        store.dispatch('updateUser', "");
        store.dispatch('updateToken', "");
        store.dispatch('updateAccount', "");
        store.dispatch('updateCenter', "");
        localStorage.clear();
        router.push({
          path: '/user/login',
        });
        return;
      }
      if (res.data.code === 200) {
        return [null, res.data]
      } else {
        return [res.data, null]
      }
    }).catch((err) => {
      console.log('axios-err', err, typeof err)
      if (typeof err === 'string') {
        err = {
          info: err
        }
        err.msg = '请稍后重试'
      }
      console.log('err', err)
      return [err, null]
    })
  }
}

export const GET = request('GET');
export const POST = request('POST');
export const PUT = request('PUT');
export const DELETE = request('DELETE');
