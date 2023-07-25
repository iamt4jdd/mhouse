import {
    Home,
    AboutUs,
    Services,
    Project,
    News,
    Contact,
} from '~/pages'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/about-us', component: AboutUs},
    { path: '/services', component: Services},
    { path: '/project', component: Project},
    { path: '/news', component: News},
    { path: '/contact', component: Contact},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }