<template>
  <!-- 
    `message` passed in each slot is a prop, that will be used by
    the parent in the template content that is to be inserted.
  -->
  <div class="ctn">
    <div>

      <slot message="Heading Geniuses"></slot>
    </div>
  </div>
</template>

<script setup>
</script>
