import {
    Home,
    AboutUs,
    Services,
    Project,
    Insights,
    Contact,
} from '~/pages'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/about-us', component: AboutUs},
    { path: '/services', component: Services},
    { path: '/project', component: Project},
    { path: '/insights', component: Insights},
    { path: '/contact', component: Contact},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }