<template>
  <div id="app" class="all-content">
    <div class="m-content">
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

<style lang="stylus" >
    .all-content {
        overflow: hidden;
        width: 100%;
        max-width: 640px;
        min-width: 320px;
        height: 100%;
        margin: 0 auto;
        .m-content {
          height: 100%;
          padding-bottom: 50px;
        }
        .m-footer {
            position: fixed;
            left: 0;
            bottom: 0;
            z-index: 1000;
            width: 100%;
        }
    }
      
</style>>


