<template>
    <div class="services" id="services">
        <div class="container">
            <h4 class="center">Some of services we offer</h4> <br> <br>
            <div class="row">
                <div class="col-lg-4 col-md-4">
                    <img src="../../../images/services/air-ticket-booking.jpg" alt="">
                </div>
                <div class="col-lg-8 col-md-8">
                    <h4>Airline & Ticket Bookings</h4>
                    <p>
                        We are the leading player in online flight bookings in Kenya, Jim Africo tours and travel offers great offers, some of the lowest airfares, exclusive discounts and a seamless online booking experience.
                    </p>
                </div>
            </div>
            <hr>
            <br> <br>
            <div class="row">
                <div class="col-lg-8 col-md-8">
                    <h4>Car Rentals & Reservations</h4>
                    <p>
                        Looking to rent a car for an upcoming vacation or business trip? Jim Africo tours and travel we make renting a car seamless so you can get right on your way.
                        Prepay for your rental and get some of the cheapest rates, or book in advance with no credit card needed—you simply pay at pickup.
                    </p>
                    <br> <br>
                    <router-link to="/services"><button class="btn-clear btn btn-sm btn-primary">Explore more of our services</button></router-link>
                </div>
                <div class="col-lg-4 col-md-4">
                    <img src="../../../images/services/car-rental.jpg" alt="">
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
        height: 154px
        width: 250px
        /*border-radius: 50%*/

    .services .btn-clear
        background-color: transparent !important
        border: 2px solid #0099cc
        color: #222222
</style>