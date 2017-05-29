import mainpage from './components/mainpage.vue'
import bltpage from './components/bltpage.vue'
import report from './components/report.vue'

export default [
    { path: '/', component: mainpage },
    { path: '/blt', component: bltpage },
    { path: '/report', component: report }
];
