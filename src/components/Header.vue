<script setup>
import { ref, computed } from 'vue'
import Home from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Post from '../views/PostView.vue'

const routes = {
  '/': Home,
  '/index': About,
  '/post': Post,
}

const currentPath = ref(window.location.hash.slice(1) || '/')

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash.slice(1) || '/'
})

const currentView = computed(() => {
  return routes[currentPath.value] || routes['/']
})
</script>

<template>
    <header class="sticky top-0 w-full bg-white shadow-md z-1000">
        <div class="flex justify-between items-center p-2 md:p-5">
            <h1><a class="font-bold md:text-3xl text-2xl" href="/">クイズ&自己紹介</a></h1>
            <ul class="font-bold flex list-none m-0 p-0 text-lg">
                <li class="md:ml-5 ml-3"><a href="#/post">投稿</a></li>
                <li class="md:ml-5 ml-3"><a href="#/index">一覧</a></li>
            </ul>
        </div>
    </header>
</template>

<style>
</style>