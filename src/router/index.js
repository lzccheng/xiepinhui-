import Vue from 'vue'
import Router from 'vue-router'

// index
import indexWrap from '@/page/index/indexWrap'
import home from '@/page/index/home'

//second
import secondWrap from '@/page/second/secondWrap'
import second from '@/page/second/second'

//报名加入
import joinWrap from '@/page/join/joinWrap'
import joinIndex from '@/page/join/joinIndex'

Vue.use(Router)

let router = new Router({
  routes: [{
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: indexWrap,
      children: [{
        path: '',
        component: home
      }],
      meta: {
        title: '首页'
      }
    },
    {
      path: '/second',
      name: 'second',
      component: secondWrap,
      children: [{
        path: '',
        component: second
      }],
      meta: {
        title: '招商合作'
      }
    },
    {
      path: '/join',
      name: 'join',
      component: joinWrap,
      children: [{
        path: '',
        component: joinIndex
      }],
      meta: {
        title: '报名加入'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
  // if (to.name == 'corpAuth') {
  //   next();
  //   return;
  // }
  // let authorization = localStorage.getItem(constant.AUTHORIZATION_KEY)
  // let payload = localStorage.getItem(constant.PAYLOAD_KEY)

  // console.log(' 权限检验 ')
  // console.log(`authorization : ${authorization} && payload : ${payload}`)

  // if (!authorization) {
  //   console.log(`没有登录，正在引导登录`)
  //   next({
  //     path: '/corpAuth'
  //   })
  // } else {
  //   console.log('路由正常进行', to)
  //   next()
  // }
})

export default router
