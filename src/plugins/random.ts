export default {
  install: (app, options) => {
    // This is only usable with component's context, this doesn't apply to setup
    app.config.globalProperties.$baseURL = 'https://api.favourfelix.com/v1'

    app.provide('random', options)
  }
}