<template>
  <div class="ctn">
    <input type="number" v-model.trim="number">
  </div>
</template>

<script setup lang="ts">
import { nextTick, onBeforeMount, onErrorCaptured, onMounted, onUpdated, ref } from "vue";

const number = ref(2)

onBeforeMount(() => {
  // This will be invoked when component is about to be mounted
  console.log('just before mounted')
})

onMounted(() => {
  // This will be invoked when component is mounted
  console.log('mounted')
})

onUpdated(() => {
  // This will be invoked when component DOM is updated with reactive state
  // changes or a single reactive state change from same component
  console.log('updated')
})

onErrorCaptured(() => {
  // This will be invoked when an error is realized from a descendant component
  // This is called during SSR mode
  console.log('error realized')
})

// BEWARE: Wrong Implementation here
nextTick(() => {
  // This will be invoked when component DOM is updated as
  // soon as a single reactive state change is effected.
  console.log('ticked')
})

</script>

<style>
input {
  display: block;
}
</style>
