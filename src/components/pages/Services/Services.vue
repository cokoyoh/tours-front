<template>
    <div class="services-home" id="services-home">
        <air-ticketing></air-ticketing>
        <cars></cars>
        <hotel></hotel>
        <corporate></corporate>
        <events></events>
        <tours></tours>
    </div>
</template>

<script>
    import AirTicketing from  './AirTicketing.vue'
    import Cars from  './CarRental.vue'
    import Hotel from  './Hotel.vue'
    import Corporate from  './CorporateTravel.vue'
    import Events from  './Events.vue'
    import Tours from  './Tours.vue'
    export default {
        components: {
            'air-ticketing': AirTicketing,
            'cars': Cars,
            'hotel': Hotel,
            'corporate': Corporate,
            'events': Events,
            'tours': Tours
        }
    }
</script>

<style lang="sass">
    .services-home
        margin-top: 0
        text-align: left

        img
            height: 154px
            width: 250px
            border-radius: 0
    .services-home h2
            font-family: 'Noto Sans', sans-serif

    .services-home p, h4
            font-family: 'Lato', sans-serif

</style>