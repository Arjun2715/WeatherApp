import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/LogIn.vue";
import Register from "@/views/Register.vue";
import WeatherForecast from "@/views/WeatherForecast.vue"; 
const routes = [
    {
        path: "/",
        name: "/", 
        component: WeatherForecast,
      },
      {
        path: "/login",
        name: "login",
        component: Login,
      },
      {
        path: "/register",
        name: "register",
        component: Register,
      },
    
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "active",
  });
export default router;
