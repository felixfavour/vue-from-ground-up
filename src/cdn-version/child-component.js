import { ref } from "vue"

export default {
  setup() {
    const message = ref("Hello Favour, from Child Component")
    return {
      message
    }
  },
  template: `
  <div class="child">
    <h3>{{ message }}</h3>
  </div>
  `
}