import VueRouter from "vue-router"
import layoutI from '../layouts/layoutI.vue'
import ChinaMapComponent from '../components/ChinaMapComponent.vue'
import numberInputComponent from '../components/NumberInputComponent.vue'

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: 'index',
            component: layoutI,
            children: [{
                path: 'index',
                component: ChinaMapComponent
            }, {
                path: 'numberInput',
                component: numberInputComponent
            }]
        },
        {
            path: '*',
            redirect: 'index'
        }
    ]
})

export default router;