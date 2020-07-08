<template>
  <div id="app">
    <Navbar
      :nav-links='navLinks'
      :imagePath="require('@/img/logo.jpg')"
    />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
// import List from '@/views/List'
export default {

  components: {
    Navbar,
    // List,
    
  },
  data: () => ({
    navLinks: [
      {
        path: '/',
        title: 'Tasks',
        icon: "list-circle",
      },
      {
        path: '/Form',
        title: 'Add',
        icon: 'add-circle',
      }
    ],
    base: JSON.parse(localStorage.getItem("myBase")),
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
