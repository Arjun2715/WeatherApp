<template>
  <div class="">
    <div v-if="!this.loading" class="relative">
      <div class="absolute z-50 overflow-y-auto">
        <div class="h-screen w-screen md:overflow-hidden">
          <div class="card sm:rounded-3xl lg:m-20 md:m-10 sm:m-5">
            <div class="grow">
              <div class="sm:flex flex-row-reverse">
                <div class="flex flex-col grow lg:px-20">
                  <div class="w-full p-5 mt-20">
                    <p class="text-2xl text-cyan-50">Weather Forecast</p>
                  </div>
                  <div class="text-6xl text-cyan-50 p-5">
                    <p class="md:hidden text-6xl">
                      {{ this.data.current.temp_c }}º
                    </p>

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
                  <div class="p-5">
                    <div class="text-lg text-cyan-50">
                      <div>
                        {{ this.data.current.condition.text }}
                        with {{ this.uvScale() }} <br />
                        Temp {{ this.data.current.temp_c }}ºC,
                        {{ this.tempScale() }} Winds
                      </div>
                      <div class="flex flex-row">
                        <div class="text-5xl w-30 mr-1">
                          {{ this.data.current.wind_degree }}º
                        </div>
                        <div class="mt-1">
                          {{ this.data.current.wind_dir }} at an avg of
                          {{ this.data.current.wind_kph }}km/h.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="p-5">
                    <button class="card rounded-3xl p-2 w-auto">
                      <div class="flex flex-row">
                        <p class="text-white md:text-bas whitespace-nowrap">
                          See Details
                        </p>
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
                <SideBar :data="this.data" />
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
      uvDescription: "",
      tempDescription: "",
    };
  },
  beforeUnmount() {
    // prevent memory leak
    clearInterval(this.interval);
  },
  created() {
    // update the time every second
    this.interval = setInterval(() => {
      // Concise way to format time according to system locale.
      // In my case this returns "3:48:00 am"
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
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
      // let city = "tokyo";
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
    uvScale() {
      let uvIndex = this.data.current.uv;
      switch (true) {
        case uvIndex < 3:
          this.uvDescription =
            "Low UV Index, Minimal risk of harm from unprotected sun exposure.";
          break;
        case uvIndex < 6:
          this.uvDescription =
            "Moderate UV Index, Take precautions if outside for extended periods.";
          break;
        case uvIndex < 8:
          this.uvDescription =
            "High UV Index, Protection against sunburn is important.";
          break;
        case uvIndex < 11:
          this.uvDescription =
            "Very High UV Index, Take extra precautions - use sunscreen, wear protective clothing, and seek shade.";
          break;
        default:
          this.uvDescription =
            "Extreme UV Index, Unprotected skin can burn quickly; minimize sun exposure.";
          break;
      }
      return this.uvDescription;
    },
    tempScale() {
      let temperature = this.data.current.temp_c;

      switch (true) {
        case temperature < 0:
          this.tempDescription =
            "Dangerously cold temperatures frostbite can occur quickly.";
          break;
        case temperature < 5:
          this.tempDescription =
            "Extremely cold wear multiple layers and cover exposed skin.";
          break;
        case temperature < 10:
          this.tempDescription = "Subfreezing temperatures dress warmly.";
          break;
        case temperature < 15:
          this.tempDescription =
            "Chilly conditions a light jacket may be sufficient.";
          break;
        case temperature < 20:
          this.tempDescription =
            "Comfortable and cool a light sweater may be enough.";
          break;
        case temperature < 25:
          this.tempDescription = "Pleasant and mild enjoy outdoor activities.";
          break;
        case temperature < 30:
          this.tempDescription = "Mildly warm light clothing is suitable.";
          break;
        case temperature < 35:
          this.tempDescription =
            " Warmer conditions stay hydrated and use sunscreen.";
          break;
        case temperature < 40:
          this.tempDescription =
            " dress lightly and avoid strenuous activities.";
          break;
        default:
          this.tempDescription =
            "Dangerously hot take extreme precautions to avoid heat-related illnesses.";
          break;
      }

      return this.tempDescription;
    },
  },
};
</script>