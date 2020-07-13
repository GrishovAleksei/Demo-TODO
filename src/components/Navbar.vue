<template>
  <nav :style="{background:'#333'}">
    <ul :style="{background:'#333'}" ref='nav'>
      <figure class="image-logo" @click="toggleNav">
        <img :src="imagePath" height="40px" width="40px">
      </figure>
      <li
        v-for="(link, index) in navLinks"
        :key="index"
        @mouseenter="$event.currentTarget.style.background = '#999'"
        @mouseleave="$event.currentTarget.style.background = '#333'"
      >
        <router-link 
          :to="link.path"
          :style="{color: '#ddd'}"
        >
          {{ link.title }}
          <ion-icon :name="link.icon"></ion-icon>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['nav-links', 'linkColor', 'imagePath'],
  methods: {
    toggleNav () {
      const nav = this.$refs.nav.classList
      nav.contains('active') ? nav.remove('active'):nav.add('active')
    }
  },
}
</script>

<style scoped lang="scss">
nav {
  height: 60px;
  width: 100%;
  box-shadow: 2px 2px 2px #CCC;
  ul {
    display: flex;
    height: 100%;
    align-items: center;
    figure {
      cursor: pointer;
      margin-right: 10px;
    }
    a {
      text-decoration: none;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
    }
    ion-icon {
      margin-right: 10px;
      font-size: 25px;
    }
    li {
      list-style-type: none;
      padding: 10px 20px;
    }
  }
}
@media screen and (max-width: 759px) {
  nav {
    background: white;
    position: static;
    ul {
      position: fixed;
      width: 150px;
      flex-direction: column;
      left: -99px;
      transition: 300ms ease all;
      padding-top: 120px;
      margin-top: -60px;

      &.active {
        left: 0px;
      }
      
      figure {
        position: fixed;
        z-index: 1;
        top: 8px;
        left: 0px;
      }
      li {
        width: 100%;
        padding-left: 0;
        padding-right: 0;
      }
      a {
        flex-direction: row;
        margin-left: 20px;
        justify-content: space-between;
        margin-right: 3px;
      }
    }
  }
}
</style>