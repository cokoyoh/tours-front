<template>
    <div class="header" id="header">
        <div class="container">
            <h2>Jimafrico Tours & Travel</h2>
            <p>
               Looking for insane travel destintions? The best hotel accomodations? Affordable plane tickets?
            </p>
            <b>
               For that and much more, Jimafrico is here for you
            </b> <br> <br>
            <router-link to="/services"><button class="btn-clear btn btn-lg btn-default">Explore Our Hot Deals</button></router-link>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="sass">
    .header
        padding: 70px 0 60px
        height: 500px
        width: 100%
        margin-top: 0
        background-image: url("../../../images/background/jim-beach-bk.jpg")
        background-position: center center
        background-repeat: no-repeat
        background-size: cover
        text-align: center

        .btn-clear
            background-color: transparent !important
            border: 2px solid #0099cc

    .header h2
        font-family: 'Noto Sans', sans-serif
        font-size: 60px

    .header p
        font-family: 'Lato', sans-serif
        font-size: 35px
        text-align: center



</style>