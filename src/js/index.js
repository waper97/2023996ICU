import {createWebHashHistory, createRouter} from 'vue-router'
import index from "@/views/index.vue";
import second from "@/views/second.vue";
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes:[
        {
            path:"/",
            componet:"/"
        },
        {
            path:"/index",
            component:index
        } ,
        {
            path:"/second",
            component:second
        }

    ]
})
export default router;