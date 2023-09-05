import { defineComponent, ref, h } from 'vue'

export default {

  setup() {
    const message = ref("Hello Favour, from Home Component")
    return {
      message
    }
  },
  template: `
  <div class="home">
    {{ message }}
    <comp></comp>
  </div>
  `
}