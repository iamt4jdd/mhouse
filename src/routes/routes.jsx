import {
    Home,
    AboutUs,
    Project,
    Insights,
    Contact,
} from '~/pages'

import {
    Construction,
    Consulting,
    HomeStayDesign,
    InteriorDesign,
    Renovation,
} from '~/pages/Services'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/about-us', component: AboutUs},
    { path: '/services/construction', component: Construction},
    { path: '/services/consulting', component: Consulting},
    { path: '/services/home-stay-design', component: HomeStayDesign},
    { path: '/services/interior-design', component: InteriorDesign},
    { path: '/services/renovation', component: Renovation},
    { path: '/project', component: Project},
    { path: '/insights', component: Insights},
    { path: '/contact', component: Contact},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }