<template>
    <div id="shaper-footer" class="sharper-footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <p><i class="fa fa-home" aria-hidden="true"></i> ABC Place, Waiyaki way </p>
                    <p><i class="fa fa-envelope" aria-hidden="true"></i> info@jimafrico.co.ke</p>
                    <p><i class="fa fa-globe" aria-hidden="true"> www.jimafrico.co.ke</i></p>
                </div>
                <div class="col-lg-6 col-md-6">
                    <h3 class="unique-footer">Social Media</h3>
                    <a href="https://www.facebook.com/Gorainc/" target="_blank"><i class="social fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="https://twitter.com/roussossdemisse" target="_blank"><i class="social fa fa-twitter" aria-hidden="true"></i></a>
                    <a href="https://www.linkedin.com/company-beta/22331369/admin/updates/" target="_blank"> <i class="social fa fa-linkedin" aria-hidden="true"> </i></a>
                    <a href="https://www.instagram.com/pescitech_Technologies_Ltd/" target="_blank"><i class="social fa fa-instagram" aria-hidden="true"></i></a>  <br> <br>
                    <p class="myfooter">Copyright <i class="fa fa-copyright" aria-hidden="true"></i>
                        {{this.getYear()}}. Jimafrico.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                year: 2016
            }
        },
        methods: {
            getYear() {
                this.year = new Date().getFullYear()
                return this.year
            }
        }
    }
</script>

<style lang="sass">
    .sharper-footer
        padding: 60px 0 60px
        background-color: #222222
        color: #fff

        .social
            height: 30px
            width: 30px
            padding: 5px
            font-size: 17px
            color: #fff
            border-radius: 50%
            margin-bottom: 10px
            margin-right: 5px
            border: 1px solid #cccccc

</style>