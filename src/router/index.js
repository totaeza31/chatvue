import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Chat from '@/components/Chat.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter:(to, from, next) =>{
        if(to.params.name){
          next();
        }else{
          next({name:'Login'})
        }
      }
    }
  ]
})
