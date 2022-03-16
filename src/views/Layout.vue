<script setup>
import TopNav from '../components/TopNav.vue'
import HeaderNav from '../components/HeaderNav.vue';
import FooterPart from '../components/FooterPart.vue'
</script>

<template>
    <top-nav></top-nav>
    <header-nav></header-nav>
    <main>
        <!--二级路由--> 
        <router-view></router-view>
    </main>
    <footer-part></footer-part>
</template>