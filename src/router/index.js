import Vue from 'vue'
import Router from 'vue-router'
import Root from '../components/Root'
import Folder from '../components/Folder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Root,
    }, {
      path: '/folder/:id',
      component: Folder,
    }
  ]
})
