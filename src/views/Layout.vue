<script setup>
import TopNav from '../components/TopNav.vue'
import HeaderPart from '../components/HeaderPart.vue'
import FooterPart from '../components/FooterPart.vue'
import HeaderStickyVue from '../components/HeaderSticky.vue';
import HeaderSticky from '../components/HeaderSticky.vue'
import { useCategoryStore } from '../store'

const topCategory = useCategoryStore()
topCategory.getList()
</script>

<template>
    <top-nav />
    <header-part />
    <header-sticky />
    <main>
        <!--二级路由--> 
        <router-view></router-view>
    </main>
    <footer-part />
</template>