import mainpage from './components/mainpage.vue'
import bltpage from './components/bltpage.vue'
import report from './components/report.vue'
import bkquery from './components/bkquery.vue'
import bkstep1 from './components/bkstep1.vue'
import bkstep2 from './components/bkstep2.vue'
import bkfinal from './components/bkfinal.vue'

export default [
    { path: '/', component: mainpage },
    { path: '/blt', component: bltpage },
    { path: '/report', component: report },
    { path: '/bkquery', component: bkquery },
    { path: '/bkstep1', component: bkstep1 },
    { path: '/bkstep2', component: bkstep2 },
    { path: '/bkfinal', component: bkfinal }
];