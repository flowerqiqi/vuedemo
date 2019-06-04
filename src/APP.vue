<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
   
  </div>
</template>

<script>
import Header from './Header.vue';
import Content from './Content.vue';
import Footer from './Footer.vue';
export default {
  name: 'App',
  components:{Header,Content,Footer},
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  #app {
   background-color: red;
    margin: 0 auto;
    width: 800px;
    height: auto;
  }
</style>