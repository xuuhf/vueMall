<template>
    <div class="tabbar">
        <router-link class="g-tabbar-item" to="/home">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/category">
            <i class="iconfont icon-category"></i>
            <span>分页类</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/cart">
            <i class="iconfont icon-cart"></i>
            <span>购物车</span>
        </router-link>
        <router-link class="g-tabbar-item" to="/personal">
            <i class="iconfont icon-personal"></i>
            <span>个人中心</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'tabbar'
}
</script>

<style lang="stylus" scoped>
    .tabbar {
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        border-top: 1px solid #888;
        .g-tabbar-item {
            text-decoration: none;
            color: #888;
            display: flex;
            justify-content: center;
            flex: 1;
            -webkit-tap-highlight-color:transparent;
        }
    }
</style>