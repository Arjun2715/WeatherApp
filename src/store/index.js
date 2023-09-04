import { createStore } from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}
export default createStore({
  state: {
    // hideConfigButton: false,
    // isPinned: true,
    // showConfig: false,
    // isTransparent: "",
    // isRTL: false,
    // color: "",
    // isNavFixed: false,
    // isAbsolute: false,
    // showNavs: true,
    // showSidenav: true,
    // showNavbar: true,
    // showFooter: true,
    // showMain: true,
    // navbarFixed:
    //   "position-sticky blur shadow-blur left-auto top-1 z-index-sticky px-0 mx-4",
    // absolute: "position-absolute px-4 mx-0 w-100 z-index-2",
    // bootstrap,
    // error: false,
    // token: false,
    client_id: "oUd4FG2-casjWkPRoLWjbC1tic0Zgjyg3SDa7gSunlk",
    baseUrl: "http://127.0.0.1:8000",
    // por defecto si no está logeado auth será = false
    // auth: false,
    auth: false,
    // formatos de fechas
    dateFormat: (date)=> {
      date = new Date(date);
      var hoy = new Date();
      if(date.getFullYear() === hoy.getFullYear() &&
      date.getMonth() === hoy.getMonth() &&
      date.getDate() === hoy.getDate())
      {
        return '\n'+addZero(date.getHours())+":"+addZero(date.getMinutes())
      } else {
        return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+'\n'+addZero(date.getHours())+":"+addZero(date.getMinutes())
      }
    },
  },
  mutations: {
    // toggleConfigurator(state) {
    //   state.showConfig = !state.showConfig;
    // },
    // navbarMinimize(state) {
    //   const sidenav_show = document.querySelector(".g-sidenav-show");
    //   if (sidenav_show.classList.contains("g-sidenav-hidden")) {
    //     sidenav_show.classList.remove("g-sidenav-hidden");
    //     sidenav_show.classList.add("g-sidenav-pinned");
    //     state.isPinned = true;
    //   } else {
    //     sidenav_show.classList.add("g-sidenav-hidden");
    //     sidenav_show.classList.remove("g-sidenav-pinned");
    //     state.isPinned = false;
    //   }
    // },
    // sidebarType(state, payload) {
    //   state.isTransparent = payload;
    // },
    // cardBackground(state, payload) {
    //   state.color = payload;
    // },
    // navbarFixed(state) {
    //   if (state.isNavFixed === false) {
    //     state.isNavFixed = true;
    //   } else {
    //     state.isNavFixed = false;
    //   }
    // },
    // toggleEveryDisplay(state) {
    //   state.showNavbar = !state.showNavbar;
    //   state.showSidenav = !state.showSidenav;
    //   state.showFooter = !state.showFooter;
    // },
    // toggleHideConfig(state) {
    //   state.hideConfigButton = !state.hideConfigButton;
    // },
  },
  actions: {
    // toggleSidebarColor({ commit }, payload) {
    //   commit("sidebarType", payload);
    // },
    // setCardBackground({ commit }, payload) {
    //   commit("cardBackground", payload);
    // },
  },
  getters: {},
});