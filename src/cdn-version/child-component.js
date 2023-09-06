import { ref } from "vue"

export const ChildComp = {

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