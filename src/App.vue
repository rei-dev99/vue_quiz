<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'
import Header from './components/MainHeader.vue'
import Footer from './components/MainFooter.vue'

const vue = ref([])

async function getVues() {
  try {
    const { data, error } = await supabase.from('vue').select()
    if (error) throw error
    vue.value = data
  } catch (error) {
    console.error('Error fetching vues:', error)
  }
}

onMounted(() => {
  getVues()
})

</script>

<template>
  <Header></Header>
    <main class="p-6">
      <RouterView />
    </main>
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
