<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <Header></Header>
  <div class="p-6">
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
    <h1>こんにちは</h1>
    <p>hello world</p>

    <div class="flex h-screen items-center justify-center bg-white dark:bg-gray-800">
      <button
        class="py-4 px-6 w-96 font-bold font-mono rounded-md transition-all text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-900 dark:text-black dark:bg-blue-400 dark:hover:bg-blue-500 dark:active:bg-blue-600"
      >
        Hello Tailwind
      </button>
    </div>
  </div>
  <Footer></Footer>
</template>

<style>
#app {
  display: block;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
