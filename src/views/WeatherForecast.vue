<template>
  <div class="relative">
    <div class="absolute">
      <div class="card m-20 w-[1720px]">
        <div class="flex flex-row">
          <div class="h-[500px]">
            <SideBar :data="this.data" />
          </div>
          <div class="flex flex-col grow px-20">
            <div class="w-full p-5 mt-20">
              <p class="text-2xl text-cyan-50">WeatherForecast</p>
            </div>
            <div class="text-6xl text-cyan-50 p-5">
              Storm <br />
              Heavy with Rain
            </div>
            <div class="w-full p-5 flex">
              <svg
                class="mr-2"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M22 13.3529C22 15.2939 21.0091 17.0061 19.5 18.0226M14.381 8.02721C14.9767 7.81911 15.6178 7.70588 16.2857 7.70588C16.9404 7.70588 17.5693 7.81468 18.1551 8.01498M7.11616 10.6089C6.8475 10.5567 6.56983 10.5294 6.28571 10.5294C3.91878 10.5294 2 12.4256 2 14.7647C2 16.0746 2.60178 17.2457 3.54704 18.0226M7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498M7.11616 10.6089C7.68059 10.7184 8.20528 10.9374 8.66667 11.2426M18.1551 8.01498C18.8381 8.24853 19.4623 8.60648 20 9.06141"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M17 19L15 21"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M15 15.5L13 17.5"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M13 20L11 22"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>
                  <path
                    d="M6 22.3849L10.2857 18.6926H6L10.2857 15"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <p class="text-xl text-cyan-50">
                Spain, Barcelona, Friday, 3 Sep, 2023 8:45AM
              </p>
            </div>
            <div class="p-5 w-[70%]">
              <div class="text-lg text-cyan-50">
                <div>Variable clouds with snow showers. High 11F. Winds</div>
                <div class="flex flex-row">
                  <div class="text-5xl w-30 mr-1">17º</div>
                  <div>
                    E at 10 to 20 mph. Chance of snow 50%. Snow<br>  accumulations
                    less than one inch.
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
              <TempGraph  :data="this.data" />
            </div>
          </div>
        </div>
        <!-- {{ this.data }} -->
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
    };
  },
  mounted() {
     this.loadData();
  },
  methods: {
    loadData() {
      // var city = "Barcelona"
      axios
        .get(
          "https://api.weatherapi.com/v1/forecast.json?key=804c0854fbe7434bbc3123537233008&q=Barcelona&days=1&aqi=yes&alerts=yes"
        )
        .then((response) => {
          this.data = response.data;
          console.log(this.data);
        })
        .catch(() => {
          console.error("ERROR");
          // self.$router.push({ name: "Sign In" });
        })
        .finally(() => {
          // this.loading = false;
        });
    }
  }
};
</script>
<style>
.card {
  background-color: rgba(24, 24, 24, 0.4);
  border-radius: 32px;
  border: 1px solid rgba(24, 24, 24, 0.4);
}
</style>