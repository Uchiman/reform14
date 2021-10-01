import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeRouter from '../pages/HomeRouter.vue';
import Home from '../pages/Home.vue';

Vue.use(VueRouter);

const routes = [
  { 
    path:'/', 
    component: HomeRouter,
    children: [
      { 
        path: '/',
        component: Home
      },
      {
        path: 'news',
        component: () => import ('../pages/News.vue')
      }
    ]
  },
  { 
    path: '/login', 
    component: () => import ('../pages/Login.vue') 
  },
  { 
    path: '*', 
    component: () => import ('../pages/Page404.vue')
  }
]

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes  
})