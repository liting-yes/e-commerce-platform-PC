<script setup>
import TopNav from '../components/TopNav.vue'
</script>

<template>
    <top-nav></top-nav>
    <header>头部</header>
    <main>
        <!--二级路由-->
        <router-view></router-view>
    </main>
    <footer>底部</footer>
</template>