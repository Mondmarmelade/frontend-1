import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("./pages/Home.vue");
const Out = () => import("./pages/Out.vue");
const Branding = () => import("./pages/Branding.vue");
const Register = () => import("./pages/Register.vue");
const About = () => import("./pages/About.vue");
const Login = () => import("./pages/Login.vue");
const Profile = () => import("./pages/Profile.vue");
const Movies = () => import("./pages/Movies.vue");
const Series = () => import("./pages/Series.vue");
const Imprint = () => import("./pages/Imprint.vue");
const Privacy = () => import("./pages/Privacy.vue");
const Terms = () => import("./pages/Terms.vue");

const routes = [
	{ path: "/", redirect: "/home" },
	{ path: "/home", component: Home },
	{ path: "/login", component: Login },
	{ path: "/out/:link(.*)", component: Out },
	{ path: "/branding", component: Branding },
	{ path: "/register", component: Register },
	{ path: "/about", component: About },
	{ path: "/profile", component: Profile },
	{ path: "/movies", component: Movies },
	{ path: "/series", component: Series },
	{ path: "/legal/imprint", component: Imprint },
	{ path: "/legal/privacy", component: Privacy },
	{ path: "/legal/terms", component: Terms },
	{ path: "/legal", redirect: "/legal/imprint" },
];

export const router = createRouter({
	history: createWebHistory(),
	routes,
});