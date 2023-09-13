<template>
  <!-- Without Async Component -->
  <div class="loading-page-ctn">
    <button @click="showLoader = !showLoader">Start Loading</button>
    <RealAsyncLoader v-if="showLoader" @close-loader="showLoader = false" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from "vue";
const showLoader = ref(false)

const RealAsyncLoader = defineAsyncComponent(() => import("./AsyncLoader.vue"))
</script>

<style scoped>
</style>