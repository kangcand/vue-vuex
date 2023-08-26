import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import Berita from "../views/Berita.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import Login from "../views/auth/Login.vue";
import FilterPageKategori from "../views/FilterPageKategori.vue";
import store from "../store";
import brand from "../views/Brand.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news",
    name: "News",
    component: Berita,
  },
  {
    path: "/category",
    name: "Category",
    component: Category,
  },
  {
    path: "/category/:category",
    name: "FilterCategory",
    component: FilterPageKategori,
  },
  {
    path: "/product",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/:slug",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/brand",
    name: "Brand",
    component: brand,
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/Cart.vue"),
    meta: { requiresLogin: true },
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: () => import("../views/Checkout.vue"),
    meta: { requiresLogin: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
    meta: { requiresGuest: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/user/Index.vue"),
    meta: { requiresLogin: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
    next("/"); // Redirect to Home
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresLogin && !store.getters["auth/isAuthenticated"]) {
    next("/login");
  } else {
    next();
  }
});

export default router;
