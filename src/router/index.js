import { createRouter, createWebHistory } from 'vue-router';
 
// import Login from '@/views/LogIn.vue';  
// import Register from '@/views/Register.vue';
import WeatherForecast from '@/views/WeatherForecast.vue'; 
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
     routes: [
      {
          path: '/',
          name: 'home', 
          component: WeatherForecast,
        },
        // {
        //   path: '/login',
        //   name: 'login',
        //   component: Login,
        // },
        // {
        //   path: '/register',
        //   name: 'register',
        //   component: Register,
        // },
  ]
  })
export default router
