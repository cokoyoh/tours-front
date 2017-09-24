<template>
    <div class="home-page" id="home-page">
        <!--Home section begins here-->
        <div class="home" id="home">
            <header-page></header-page>
        </div>
        <!--Home section ends here-->

        <!--Snap details begin-->
            <snap></snap>
        <!--Snap details end-->

        <!--Services begins-->
        <div class="services" id="services">
            <services></services>
        </div>
        <!--Services ends-->

        <!--About section begins here-->
        <div class="about" id="about">
            <about></about>
        </div>
        <!--About section ends here-->

        <!--Team begins here-->
            <team></team>
        <!--Team ends here-->
    </div>

</template>

<script>
    import HeaderPage from './Header.vue'
    import Snap from './SnapDetails.vue'
    import About from './About.vue'
    import Team from './Team.vue'
    import Services from './Services.vue'

    export default {
        data() {
            return {
            }
        },
        components: {
            'header-page': HeaderPage,
            'snap': Snap,
            'about': About,
            'team': Team,
            'services': Services,
        }

    }
</script>

<style lang="sass">
    .home-page
        padding: 0px 0 60px

    h2
        font-family: 'Noto Sans', sans-serif

    p, h4
        font-family: 'Lato', sans-serif


</style>