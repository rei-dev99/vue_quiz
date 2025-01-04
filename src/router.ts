// import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import PostView from './views/Post.vue'
import PostsView from './views/Posts.vue'
import PostShowView from './views/PostShowView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/post',
    name: 'post',
    component: PostView,
  },
  {
    path: '/post/:id',
    name: 'PostShowView',
    component: PostShowView,
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostsView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
