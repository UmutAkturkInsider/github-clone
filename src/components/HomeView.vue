<template>
  <div class="bg-white">
    <TheNav />
    <MainContainer />
</div>
</template>

<script>
import TheNav from './Nav.vue';
import MainContainer from './MainContainer.vue'

export default {
  components: {
    TheNav,
    MainContainer
  },
  name: 'HomeView',
  props: {
    msg: String
  }
}
</script>
