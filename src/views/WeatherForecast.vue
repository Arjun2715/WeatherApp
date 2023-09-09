<template>
  <div>
    <div v-if="!this.loading" class="relative">
      <div class="absolute">
        <div>
          <div class="card m-20 w-[1730px]">
            <div class="flex flex-row">
              <div class="h-[500px]">
                <SideBar :data="this.data" />
              </div>
              <div class="flex flex-col grow px-20">
                <div class="w-full p-5 mt-20">
                  <p class="text-2xl text-cyan-50">WeatherForecast</p>
                </div>
                <div class="text-6xl text-cyan-50 p-5">
                  {{ this.data.current.condition.text }}
                </div>
                <div class="w-full p-5 flex">
                  <img :src="this.data.current.condition.icon" alt="" />
                  <p class="text-xl text-cyan-50 flex self-center">
                    {{ this.data.location.name }},
                    {{ this.data.location.region }},
                    {{ this.data.location.country }}
                    {{ this.date }}
                    {{ this.time }}

                    <!-- Spain, Barcelona, Friday, 3 Sep, 2023 8:45AM  last_updated location -->
                  </p>
                </div>
                <div class="p-5 w-[70%]">
                  <div class="text-lg text-cyan-50">
                    <div>
                      Variable clouds with snow showers. High 11F. Winds
                    </div>
                    <div class="flex flex-row">
                      <div class="text-5xl w-30 mr-1">17º</div>
                      <div>
                        E at 10 to 20 mph. Chance of snow 50%. Snow<br />
                        accumulations less than one inch.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button class="card p-2 m-2">
                    <div class="flex flex-row">
                      <p class="text-white">See Details</p>
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </button>
                </div>
                <div class="mt-5">
                  <TempGraph :data="this.data" />
                </div>
              </div>
              <div class="p-2">
                <button class="">
                  <!-- @click="this.ready()" -->
                  <svg
                    fill="#FFFFFF60"
                    width="34px"
                    height="34px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M23,12A11,11,0,1,1,12,1a10.9,10.9,0,0,1,5.882,1.7l1.411-1.411A1,1,0,0,1,21,2V6a1,1,0,0,1-1,1H16a1,1,0,0,1-.707-1.707L16.42,4.166A8.9,8.9,0,0,0,12,3a9,9,0,1,0,9,9,1,1,0,0,1,2,0Z"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="flex flex-row justify-center">
      <div class="wrapper">
        <div class="cloud">
          <div class="cloud_left"></div>
          <div class="cloud_right"></div>
        </div>
        <div class="rain">
          <div class="drop"></div>
          <div class="drop"></div>
          <div class="drop"></div>
          <div class="drop"></div>
          <div class="drop"></div>
        </div>
        <div class="surface">
          <div class="hit"></div>
          <div class="hit"></div>
          <div class="hit"></div>
          <div class="hit"></div>
          <div class="hit"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import SideBar from "@/components/SideBar.vue";
import TempGraph from "@/components/TempGraph.vue";

export default {
  name: "WeatherForecast",
  components: {
    SideBar,
    TempGraph,
  },
  data() {
    return {
      data: null,
      loading: true,
      interval: null,
      date: null,
      time: null,
    };
  },
  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval)
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }).format()
    }, 1000)
  },
  mounted() {
    this.loadData();
     this.currentTime();
  },
  methods: {
    currentTime() {
      const now = new Date();
      this.date = now.toDateString();
      // return ;
    },
    loadData() {
      // var city = "Barcelona"
      axios
        .get(
          "https://api.weatherapi.com/v1/forecast.json?key=804c0854fbe7434bbc3123537233008&q=Barcelona&days=1&aqi=yes&alerts=yes"
        )
        .then((response) => {
          this.data = response.data;
          // console.log(this.data);
        })
        .catch(() => {
          console.error("ERROR");
          // self.$router.push({ name: "Sign In" });
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>