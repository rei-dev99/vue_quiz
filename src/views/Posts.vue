<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient'; // supabaseのインスタンスをインポート

const posts = ref([]); // 投稿を格納するためのリアクティブな変数

onMounted(async () => {
  const { data, error } = await supabase
    .from('vue') // 'vue' テーブルからデータを取得
    .select('*'); // 必要なカラムを選択

  if (error) {
    console.error('Error fetching posts:', error);
  } else {
    posts.value = data; // 取得したデータをリアクティブな変数に格納
  }
});
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <h2 class="text-2xl font-bold text-center mb-4">投稿一覧</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link
        v-for="v in posts"
        :key="v.id"
        :to="{ name: 'PostShowView', params: { id: v.id } }"
        class="bg-white rounded-lg shadow-md p-4 transform transition duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
      >
        <h3 class="text-xl font-semibold">{{ v.title }}</h3>
        <p class="text-gray-600">{{ v.name }}</p>
      </router-link>
    </div>
  </div>
</template>
