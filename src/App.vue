<template>
  <div id="app">
    <Navbar
      :nav-links='navLinks'
      :imagePath="require('@/img/logo.jpg')"
    />
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  mounted() {
    this.base=JSON.parse(localStorage.getItem("myBase"))
    if(!this.base) {
      this.base=[]
    } 
  },
  components: {
    Navbar,
  },
  
  data: () => ({
    navLinks: [
      {
        path: '/',
        title: 'Tasks',
        icon: "list-circle",
      },
    ],
    base: [],
  })
}
</script>

<style lang="scss">
  figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 10px;
    margin-inline-end: 0; 
  }
  body {
    margin: 0;
  }
  #app {
    font-family: 'Open Sans Condensed', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
