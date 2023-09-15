<template>
  <div class="ctn-ctn">

    <div class="ctn">
      <input type="search" v-model="filter" placeholder="Filter Cards">
      <button @click="shuffleArray(cards)">Shuffle Cards</button>
      <TransitionGroup>
        <div v-for="card in filteredCards" :key="card" class="card">
          {{  card  }}
        </div>
      </TransitionGroup>
    </div>

    <div class="ctn">
      Just a div at the bottom
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const cards = ref([
  'Ada is a boy',
  'Emma is a girl',
  'Odogwu Malaika',
  'Chitos',
  'Mamacita',
  'Lez go!'
])
const filter = ref('')

const filteredCards = computed(() => {
  if (filter.value === '') {
    return cards.value
  }
  return cards.value.filter(card => card.toLowerCase().includes(filter.value))
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}
</script>

<style scoped>
.ctn-ctn {
  padding-bottom: 40vh;
}

.ctn {
  background: pink;
  margin-top: 2rem;
  padding: 2rem;
  display: grid;
  gap: 1rem;
  position: relative;
}

.card {
  background: red;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  color: #FFF;
}

/* Default <Transition> class names */
.v-move,
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.v-leave-active {
  position: absolute;
  right: 0;
  left: 0;
}
</style>