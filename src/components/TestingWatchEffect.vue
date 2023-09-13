<template>
  <input type="text" v-model="name">
  <input type="number" v-model="age">
  <input type="text" v-model="form">
  <input type="text" v-model="drink">
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue';
const name = ref('Emmanuel')
const age = ref(27)
const form = ref('ss2')
const drink = ref('fanta')

// Normal Watcher
// watch(name, () => {
//   console.log(name.value);
// })

// Watching with WatchEffect
/**
 * Tracks all reactive dependencies that have been
 * referenced in the watchEffect callback
 */
watchEffect(() => {
  console.log(age.value)
})

</script>

<style scoped>
input {
  display: block;
}
</style>