import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import upperFirst from 'lodash/upperFirst'
  import camelCase from 'lodash/camelCase'
  
  const requireComponent = require.context( // WebPack function, takes three params
    './components', // 1) directory to search within
    false, // 2) whether to search sub-directories
    /Base[A-Z]\w+\.(vue|js)$/ // 3) regular expression
  )
  
  requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )
  
  Vue.component(
    componentName,
    componentConfig.default || componentConfig // depending on how the component exports itself
  )
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
