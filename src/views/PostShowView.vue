<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { supabase } from '../lib/supabaseClient'; // supabaseのインスタンスをインポート

const route = useRoute();
const post = ref(null); // 投稿を格納するためのリアクティブな変数

onMounted(async () => {
  const { data, error } = await supabase
    .from('vue') // 'vue' テーブルからデータを取得
    .select('*') // 必要なカラムを選択
    .eq('id', route.params.id) // idが一致するものを取得
    .single(); // 1件だけ取得

  if (error) {
    console.error('Error fetching posts:', error);
  } else {
    post.value = data; // 取得したデータをリアクティブな変数に格納
  }
});
</script>

<template>
  <div class="max-w-4xl mx-auto p-6" v-if="post">
    <h2 class="text-2xl font-bold text-center mb-4">{{ post.title }}</h2>
    <div class="bg-white rounded-lg shadow-md p-4">
      <p class="mb-2"><strong>選択肢1:</strong> {{ post.choose1 }}</p>
      <p class="mb-2"><strong>選択肢2:</strong> {{ post.choose2 }}</p>
      <p class="mb-2"><strong>答え:</strong> {{ post.choose3 }}</p>
      <p class="mb-2"><strong>解説:</strong> {{ post.description }}</p>
      <p class="mb-2"><strong>X URL:</strong> <a :href="post.x_url" target="_blank">{{ post.x_url }}</a></p>
      <p><strong>Times URL:</strong> <a :href="post.times_url" target="_blank">{{ post.times_url }}</a></p>
    </div>
  </div>
</template>
