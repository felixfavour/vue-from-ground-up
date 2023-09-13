<template>
  <!-- 
    `message` passed in each slot is a prop, that will be used by
    the parent in the template content that is to be inserted.
  -->
  <div class="ctn">
    <div>

      This is the Header content: <slot name="header" message="Heading Geniuses"></slot>
    </div>
    <div>

      This is the Main content: <slot name="main"
        message="This is a lorem paragraph that will not reach 100 words but will have 100 in it, twice."></slot>
    </div>
    <div>

      This is the Footer content: <slot name="footer" message="Glory be to God"></slot>
    </div>
    <div>

      Default Slot here: <slot message="I am default"></slot>
    </div>
  </div>
</template>

<script setup>
</script>
