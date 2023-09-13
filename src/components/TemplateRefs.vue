<template>
  <main class="ctn">
    <section ref="refSection">
      <h1>This is me</h1>

      <!-- TEMPLATE REFS WITH v-for -->
      <ul class="list">
        <li class="card" v-for="count in 5" :key="count" ref="cards" :id="`card-${count}`">
          This is an important card
        </li>
      </ul>

      <!-- REFS CAN ALSO BE ASSIGNED WITH INLINE FUNCTIONS -->
      <section :ref="(el) => innerSection = el"></section>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const refSection = ref(null)
const innerSection = ref(null)
// Templates ref attached to a v-for element will return an array
const cards = ref([])

console.log(refSection.value)

onMounted(() => {
  console.log('when mounted', refSection.value)
  console.log('innerSection', innerSection.value)
  console.log('v-for template ref', cards.value)
})

defineExpose({
  cards
})
</script>

<style>
</style>