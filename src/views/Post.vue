<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

const quizTitle = ref('')
const quizDescription = ref('')
const quizChoose1 = ref('')
const quizChoose2 = ref('')
const quizChoose3 = ref('')
const quizXurl = ref('')
const quizTimesUrl = ref('')

const submitQuiz = async () => {
  try {
    const { data, error } = await supabase
      .from('vue')
      .insert([
        {
          title: quizTitle.value,
          description: quizDescription.value,
          choose1: quizChoose1.value,
          choose2: quizChoose2.value,
          choose3: quizChoose3.value,
          x_url: quizXurl.value,
          times_url: quizTimesUrl.value
        }
      ])

    if (error) throw error

    console.log('クイズが投稿されました:', data)
    // フォームをリセット
    quizTitle.value = ''
    quizDescription.value = ''
    quizChoose1.value = ''
    quizChoose2.value = ''
    quizChoose3.value = ''
    quizXurl.value = ''
    quizTimesUrl.value = ''

    // 成功メッセージを表示するなどの処理をここに追加できます
  } catch (error) {
    console.error('エラー:', error)
    // エラーメッセージを表示するなどの処理をここに追加できます
  }
}
</script>

<template>
  <div id="post" class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-3xl font-bold text-center mb-4">クイズを投稿してBeOpenしましょう！</h2>
    <p class="mb-4">まずはクイズ画面の内容です。</p>
    <form @submit.prevent="submitQuiz">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700">クイズタイトル:</label>
        <input
          type="text"
          id="title"
          v-model="quizTitle"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div class="mb-4">
        <label for="quizChoose1" class="block text-sm font-medium text-gray-700">選択肢1:</label>
        <input
          type="text"
          id="quizChoose1"
          v-model="quizChoose1"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div class="mb-4">
        <label for="quizChoose2" class="block text-sm font-medium text-gray-700">選択肢2:</label>
        <input
          type="text"
          id="quizChoose2"
          v-model="quizChoose2"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div class="mb-4">
        <label for="quizChoose3" class="block text-sm font-medium text-gray-700">答え:</label>
        <input
          type="text"
          id="quizChoose3"
          v-model="quizChoose3"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <p class="mb-4">次にクイズ正解後の内容です。</p>
      <div class="mb-4">
        <label for="quizDescription" class="block text-sm font-medium text-gray-700">解説:</label>
        <textarea
          id="quizDescription"
          v-model="quizDescription"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="quizXurl" class="block text-sm font-medium text-gray-700">XのURLを記述してください:</label>
        <textarea
          id="quizXurl"
          v-model="quizXurl"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="quizTimesUrl" class="block text-sm font-medium text-gray-700">timesのURLを記述してください:</label>
        <textarea
          id="quizTimesUrl"
          v-model="quizTimesUrl"
          required
          class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      >
        投稿する
      </button>
    </form>
  </div>
</template>
