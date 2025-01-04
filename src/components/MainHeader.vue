<template>
  <header class="sticky top-0 w-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md z-1000">
    <div class="flex justify-between items-center p-2 md:p-5">
      <h1>
        <router-link class="font-bold md:text-3xl text-2xl text-white hover:text-yellow-300 transition duration-300" to="/">
          クイズ&自己紹介
        </router-link>
      </h1>
      <ul class="font-bold flex list-none m-0 p-0 text-lg">
        <li class="md:ml-5 ml-3">
          <router-link class="text-white hover:text-yellow-300 transition duration-300" to="/post">投稿</router-link>
        </li>
        <li class="md:ml-5 ml-3">
          <router-link class="text-white hover:text-yellow-300 transition duration-300" to="/posts">一覧</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
