<script setup>
import { onMounted, ref } from 'vue';
import TestingWatchEffect from './components/TestingWatchEffect.vue';
import LifecycleHooks from './components/LifecycleHooks.vue';
import TemplateRefs from './components/TemplateRefs.vue';
import AsyncComponents from './components/AsyncComponents.vue';
import TestingSlots from './components/TestingSlots.vue';
import TestingUnnamedSlots from './components/TestingUnnamedSlots.vue';
import TestingTransitions from './components/TestingTransitions.vue';
import TestingTransitionGroups from './components/TestingTransitionGroups.vue';

const selectValue = ref('')
const componentRef = ref(null)

function methodHandler(event) {
  console.log(event.target.tagName);
}

onMounted(() => {

  console.log('componentRef', componentRef.value.cards)
})
</script>

<template>
  <main>
    <!-- INLINE HANDLERS -->
    <div>
      <button @click="console.log('kjdlkj')">Click me to test inline handling</button>
    </div>

    <!-- METHOD HANDLERS -->
    <div>
      <button @click="methodHandler">Click me to test method handling</button>
    </div>

    <!-- FORM INPUT BINDINGS - V-MODEL ON SELECT WITHOUT VALUES FOR OPTIONS -->
    <h3>Option Selected: {{  selectValue  }}</h3>
    <select v-model="selectValue" multiple>
      <option disabled value="">Please select an Option</option>
      <option>Apple</option>
      <option>Baba</option>
      <option>Catarrh</option>
      <option>Dolly Baby</option>
    </select>

    <!-- Testing watchEffect -->
    <TestingWatchEffect />

    <!-- Testing Lifecycle Hooks -->
    <LifecycleHooks />

    <!-- Testing Template Refs -->
    <TemplateRefs ref="componentRef" />

    <!-- Testing Async Components -->
    <AsyncComponents />

    <!-- Testing Named Slots, Scoped Slots etc. -->
    <TestingSlots>
      <!-- How to provide utilize props on named slots -->
      <template #header="headerProps">
        <h1>Hello {{  headerProps.message  }}</h1>
      </template>
      <template #main="mainProps">
        <p>Hello {{  mainProps.message  }}</p>
      </template>
      <template #footer="footerProps">
        <footer>Hello {{  footerProps.message  }}</footer>
      </template>
    </TestingSlots>

    <br><br>

    <!-- How to provide utilize props on unnamed/default slots -->
    <TestingUnnamedSlots #=slotProps>
      <p>Helllloooo {{  slotProps.message  }}</p>
    </TestingUnnamedSlots>

    <!-- Testing <Transition>s -->
    <TestingTransitions />

    <!-- Testing <TransitionGroup>s -->
    <TestingTransitionGroups />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
