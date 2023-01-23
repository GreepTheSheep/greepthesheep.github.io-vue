<script>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        RouterView, Navbar, Footer
    }
}
</script>

<template>

    <header class="h-20">
        <Navbar />
    </header>
    <div class="body">
        <RouterView />
    </div>
    <footer>
        <Footer />
    </footer>
</template>
