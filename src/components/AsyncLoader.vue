<template>
  <div class="loader">
    <h2>Loading...</h2>
    <button @click="$emit('close-loader')">close loader</button>
  </div>
</template>

<script script>
</script>

<style scoped>
.loader {
  height: 100vh;
  width: 100%;
  inset: 0;
  position: absolute;
  display: grid;
  place-items: center;
  color: #FFF;
  background: #cecece90;
}
</style>