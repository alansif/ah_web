import mainpage from './components/mainpage.vue'
import bltpage from './components/bltpage.vue'
import location from './components/location.vue'
import ctm from './components/ctm.vue'
import ctmview from './components/ctmview.vue'
import survey from './components/survey.vue'
import doctm from './components/doctm.vue'
import doctmchk from './components/doctmchk.vue'
import doctmord from './components/doctmord.vue'
import doctmdone from './components/doctmdone.vue'
import report from './components/report.vue'
import bkquery from './components/bkquery.vue'
import bkstep1 from './components/bkstep1.vue'
import bkstep2 from './components/bkstep2.vue'
import bkfinal from './components/bkfinal.vue'
import bkview from './components/bkview.vue'
import bkcancel from './components/bkcancel.vue'

export default [
    { path: '/home', component: mainpage },
    { path: '/', redirect: '/home' },
    { path: '/blt', component: bltpage },
    { path: '/location', component: location },
    { path: '/ctm', component: ctm, children:[
        {path:'survey',component:survey},
        {path:'doctm',component:doctm},
        {path:'doctmchk',component:doctmchk},
        {path:'doctmord',component:doctmord},
        {path:'doctmdone',component:doctmdone}
    ] },
    { path: '/ctmview', component: ctmview },
    { path: '/report', component: report },
    { path: '/bkquery', component: bkquery },
    { path: '/bkstep1', component: bkstep1 },
    { path: '/bkstep2', component: bkstep2 },
    { path: '/bkfinal', component: bkfinal },
    { path: '/bkview', component: bkview },
    { path: '/bkcancel', component: bkcancel }
];
