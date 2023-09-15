<template>
  <div class="ctn">
    <button @click="elVisibility = !elVisibility">
      Toggle Hide/Show
    </button>

    <!-- <Transition>
      <p v-show="elVisibility">This is a hidable element</p>
    </Transition> -->

    <Transition name="css-anim">
      <p v-show="elVisibility">This is a hidable element with CSS Animations</p>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const elVisibility = ref(true)
</script>

<style scoped>
.ctn {
  background: green;
  margin-top: 2rem;
  padding: 2rem;
}

/* Default <Transition> class names */
.v-enter-active,
.v-leave-active {
  transition: 0.3s ease;
  /* transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); */
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* 'css-anim' <Transition> class name */
.css-anim-enter-active {
  animation: 1s bounce-in ease;
}

.css-anim-leave-active {
  animation: 1s bounce-in reverse ease;
}

@keyframes bounce-in {
  0% {
    transform: translateY(0px);
  }

  20% {
    transform: translateY(40px);
  }

  40% {
    transform: translateY(10px);
  }

  60% {
    transform: translateY(50px);
  }

  80% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>