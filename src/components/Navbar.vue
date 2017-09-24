<template>
    <div class="container-fluid">
        <nav>
            <ul class="nav nav-pills float-right">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
                 </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about" v-if="this.$route.path === '/'">About</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/services">Services</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#team" v-if="this.$route.path === '/'">Team</a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
                </li>
                <hr>
            </ul>
        </nav>
        <h3 class="text-muted">Jimafrico Tours & Travel</h3>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
          return {
              requiresAuth: false,
              atHome: true
          }
        },
        computed: mapState({
            userStore:state => state.userStore
        }),
    }
</script>

<style lang="sass">
     nav
        padding: 10px 0 10px
        text-transform: uppercase
     .nav a, router-link
        color: #222222 !important
</style>