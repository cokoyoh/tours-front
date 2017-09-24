<template>
    <div class="freelancer">
        <div class="container">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus egestas massa vitae scelerisque. Quisque non velit tincidunt, blandit nisl at, rhoncus lorem. Phasellus tincidunt mollis lobortis. Maecenas tempus cursus arcu ut tristique. Duis sit amet ipsum ut mi sollicitudin pretium nec a nibh. Cras luctus luctus dictum.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus egestas massa vitae scelerisque. Quisque non velit tincidunt, blandit nisl at, rhoncus lorem. Phasellus tincidunt mollis lobortis. Maecenas tempus cursus arcu ut tristique. Duis sit amet ipsum ut mi sollicitudin pretium nec a nibh. Cras luctus luctus dictum.
            </p>
        </div>
        <sharp_footer></sharp_footer>
    </div>
</template>

<script>
    import SharperFooter from '../Footer.vue'
    export default {
        components: {
            sharp_footer: SharperFooter,
        }

    }
</script>

<style lang="sass">
    .freelancer
        padding: 60px 0 60px
        height: 450px
</style>