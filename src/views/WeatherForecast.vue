<template>
  <div class="h-screen w-screen flex flex-col">
    <div v-if="!loading" class="relative h-full w-full">
      <div
        class="absolute inset-0 z-0 flex flex-col lg:flex-row overflow-hidden"
      >
        <div class="card xl:rounded-3xl xl:m-10 flex-grow overflow-hidden">
          <div class="flex flex-col lg:flex-row-reverse h-full">
            <div
              class="flex flex-col justify-between max-w-screen-lg mx-auto p-5"
            >
              <p class="text-2xl text-cyan-50">Weather Forecast</p>
              <div class="text-6xl text-cyan-50">
                <p class="lg:hidden text-6xl">{{ data.current.temp_c }}º</p>
                {{ data.current.condition.text }}
              </div>
              <div class="w-full flex items-center space-x-2">
                <img
                  :src="data.current.condition.icon"
                  class="w-12 h-12"
                  alt=""
                />
                <p class="text-xl text-cyan-50">
                  {{ data.location.name }}, {{ data.location.country }} -
                  {{ date }} {{ time }}
                </p>
              </div>
              <div class="text-lg text-cyan-50">
                <p>{{ data.current.condition.text }} with {{ uvScale() }}</p>
                <p>
                  Temp: {{ data.current.temp_c }}ºC, {{ tempScale() }} Winds
                </p>
                <div class="flex items-center">
                  <div class="text-5xl mr-2">
                    {{ data.current.wind_degree }}º
                  </div>
                  <p>
                    {{ data.current.wind_dir }} at avg
                    {{ data.current.wind_kph }}km/h.
                  </p>
                </div>
              </div>
              <div class="mt-2">
                <TempChart :data="data" />
              </div>
              <div class="mt-2 max-w-max">
                <TempGraph :data="data" />
              </div>
            </div>
            <div class="h-auto flex"> 
                <SideBar :data="data" />
              </div> 
          </div>
        </div>
      </div>
      <div
        v-if="!loginHidden"
        class="absolute inset-0 flex items-center justify-center"
      >
        <!-- <div class="absolute inset-0 bg-black opacity-50"></div>
        <LogIn @cancelClicked="handleCancel" class="z-10" /> -->
      </div>

    </div>
    <div v-else class="flex flex-col justify-center items-center h-screen">
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
// import axios from "axios";
import SideBar from "@/components/SideBar.vue";
import TempGraph from "@/components/TempGraph.vue";
import TempChart from "@/components/TempChart.vue";

export default {
  name: "WeatherForecast",
  components: {
    SideBar,
    TempGraph,
    TempChart,
  },
  props: {
    city: String,
    data: Object,
  },
  data() {
    return {
      // data: null,
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
    this.loading = false;
  },
  mounted() {
    // this.loadData();
    this.currentTime();
  },
  methods: {
    currentTime() {
      const now = new Date();
      this.date = now.toDateString();
      // return ; 
    },
    // loadData() {
    //   //  let city = "Barcelona";
    //   axios
    //     .get(
    //       "https://api.weatherapi.com/v1/forecast.json?key=804c0854fbe7434bbc3123537233008&q="+this.city+"&days=1&aqi=yes&alerts=yes"
    //     )
    //     .then((response) => {
    //       this.data = response.data;
    //       // console.log(this.data);
    //     })
    //     .catch(() => {
    //       console.error("ERROR");
    //       // self.$router.push({ name: "Sign In" });
    //     })
    //     .finally(() => {
    //       this.loading = false; 
    //     });
    // },
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