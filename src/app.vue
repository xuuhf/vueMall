<template>
  <div id="app">
    <div id="m-content">
      <keep-alive>
         <router-view />
      </keep-alive>
    </div>
    <div class="m-footer">
      <tabbar/>
    </div>
  </div>
</template>

<script>
import tabbar from './components/tabbar/index.vue'
export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style lang="scss" >
@import'./app.scss';
</style>>


