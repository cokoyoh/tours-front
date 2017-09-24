import Vue from 'vue'
import VueRouter from 'vue-router'


const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: require('./components/pages/home-components/Home.vue'),
            name:'home',
        },
        {
            path: '/forgot-password',
            component: require('./components/reset_password/ForgotPassword.vue'),
            name:'forgot-password',
        },
        {
            path: '/reset-password/:token',
            component: require('./components/reset_password/ResetPassword.vue'),
            name:'reset-password',
        },
        {
            path: '/login',
            component: require('./components/auth/Login.vue'),
            name:'login',
        },
        {
            path: '/services',
            component: require('./components/pages/Services.vue'),
            name:'services',
            meta: {
                requiresAuth: false ,
            }
        },
        {
            path: '/contact-us',
            component: require('./components/pages/Contact.vue'),
            name: 'contact',
            meta: {
                requiresAuth: false,
            }
        },
    ],
    mode: 'history',
})



/**
 * Auth guards here
 */
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth){
        const auth_user = JSON.parse(window.localStorage.getItem('auth_user'))
        if(auth_user && auth_user.access_token){
            next()
        } else next('login')
    }
    next()
})

Vue.use(VueRouter)

export default router