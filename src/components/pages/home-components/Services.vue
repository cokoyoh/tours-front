<template>
    <div class="services" id="services">
        <div class="container">
            <h4 class="center">Some of services we offer</h4> <br> <br>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <img src="../../../images/services/www.jpg" alt="">
                </div>
                <div class="col-lg-8 col-md-8">
                    <h4>Web Design & Development</h4>
                    <p>We specialize in web designing of responsive and user friendly applications</p>
                </div>
            </div>
            <hr>
            <br> <br>
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <h4>Mobile App Development</h4>
                    <p>
                        Gora Inc, develops client customized mobile applications. We develop Android apps, windows app, ios apps and more.
                    </p>
                    <br> <br>
                    <router-link to="/services"><button class="btn-clear btn btn-sm btn-primary">Explore More Here</button></router-link>
                </div>
                <div class="col-lg-4 col-md-4">
                    <img src="../../../images/services/mobile-app.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="sass">
    .services
        padding: 40px 0 60px
        .center
            text-align: center
    .services img
        height: 150px
        width: 150px
        border-radius: 50%

    .services .btn-clear
        background-color: transparent !important
        border: 2px solid #0099cc
        color: #222222
</style>