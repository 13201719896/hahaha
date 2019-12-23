import leftAside from './home/left-aside'
import rightAside from './home/right-aside'
export default {
  install (Vue) {
    Vue.component('left-aside', leftAside)
    Vue.component('right-aside', rightAside)
  }
}
