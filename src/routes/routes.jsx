import {
    Home,
    AboutUs,
    Project,
    Insights,
    Contact,
} from '~/pages'

import {
    HomeStayDesign,
    InteriorDesign,
} from '~/pages/Services'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/about-us', component: AboutUs},
    { path: '/services/home-stay-design', component: HomeStayDesign},
    { path: '/services/interior-design', component: InteriorDesign},
    { path: '/project', component: Project},
    { path: '/insights', component: Insights},
    { path: '/contact', component: Contact},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }