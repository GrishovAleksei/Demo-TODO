<template>
  <transition name="modal-fade" >
    <div class="modal-wrapper" ref="modal-wrapper">
      <div class="modal">
        <header class="modal-header">
          <h1>Are you sure?</h1>
        </header>
        <section class="modal-body">
          
          <button type="submit" @click="confirm" class='btn'
            @mouseenter="$event.target.style.color = 'green'"
            @mouseleave="$event.target.style.color = '#000'">
            Yes
          </button>
          <button type="submit" @click="close" class='btn'
            @mouseenter="$event.target.style.color = 'red'"
            @mouseleave="$event.target.style.color = '#000'">
            No
          </button>
        </section>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'modal',
  props: {
  },

  methods: {
    close() {
      this.$emit('close')
    },
    confirm() {
      this.$emit('confirm', true)
    },
  },
  mounted() {
    let vm = this
    document.addEventListener('click', (item)=>{
      if(item.target === vm.$refs["modal-wrapper"]){
        vm.close()
      }
    })
  },

}
</script>

<style lang="scss">
  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    z-index:1;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #2CBBBB;
    justify-content: center;
    padding: 20px;
    display: flex;
  }
  .modal-body {
    position: relative;
    padding: 20px 10px;
  }
  .btn {
    border: none;
    font-size: 15px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #000;
    background: transparent;
  }
  .modal-fade-enter,
  .modal-fade-leave-active {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease
  }
</style>