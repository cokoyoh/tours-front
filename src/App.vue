<template>
    <div id="app">
        <navbar></navbar>
        <router-view></router-view>
        <my-footer></my-footer>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import MyFooter from './components/pages/Footer.vue'
import {mapState} from 'vuex'
export default {
  data () {
    return {
    }
  },
    computed: mapState({
        userStore:state => state.userStore
    }),

    created() {
      console.log("Global stuff here!")
     const user_object = JSON.parse(window.localStorage.getItem('auth_user'))
        this.$store.dispatch('setUserObject',user_object)
    },
    components: {
      'navbar': Navbar,
        'my-footer' : MyFooter,
    }
}
</script>

<style lang="sass">
    /*@import "/src/assets/css/bootstrap.min.css"*/
</style>
