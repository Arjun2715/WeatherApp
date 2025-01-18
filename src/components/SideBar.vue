<template>
  <div v-if="loading" class="card rounded-3xl text-white h-full flex flex-col">
    <div class="flex-1 flex flex-col">
      <div class="w-auto md:pt-3"></div>
      <div
        class="hidden md:flex lg:w-[400px] space-x-4 justify-between h-[150px] p-4 pt-7 md:grow"
      >
        <label class="text-6xl"
          >{{ roundTemp(this.data.current.temp_c) }}ºC</label
        >
        <div class="">
          <div class="flex flex-col">
            <label
              >Max Temp:
              {{ this.data.forecast.forecastday[0].day.maxtemp_c }} ºC</label
            >
            <label
              >Min Temp:
              {{ this.data.forecast.forecastday[0].day.mintemp_c }} ºC</label
            >
            <label
              >Avg Temp:
              {{ this.data.forecast.forecastday[0].day.avgtemp_c }} ºC</label
            >
          </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF20] rounded-3xl p-4 h-[100px] mb-1">
        <div class="flex flex-row justify-between">
          <div>
            <div class="flex">
              <label class="mr-4">Wind Speed</label>
              <label>{{ this.data.current.wind_kph }}km/h</label>
            </div>
            <div class="flex">
              <label class="mr-4">Wind Direction</label>
              <label>{{ this.data.current.wind_dir }}</label>
            </div>
          </div>
          <div>
            <WindIndicator
              :wind_degree="this.data.current.wind_degree"
              :wind_dir="this.data.current.wind_dir"
            />
          </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF20] rounded-3xl p-4 h-auto mb-1">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col justify-between">
            <div class="flex flex-row justify-between">
              <label class="mr-4">Sunrise</label>
              <label class="whitespace-nowrap">{{
                this.data.forecast.forecastday[0].astro.sunrise
              }}</label>
            </div>
            <div class="flex flex-row">
              <label class="mr-4">Sunset</label>
              <label class="whitespace-nowrap">{{
                this.data.forecast.forecastday[0].astro.sunset
              }}</label>
            </div>
          </div>
          <div>sun</div>
        </div>
      </div>
      <div class="bg-[#FFFFFF20] rounded-3xl p-4 flex-1 h-auto">
        <div class="flex flex-row">
          <label class="flex-1">Humidity</label>
          <label>{{ this.data.current.humidity }}%</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1">Chance of Rain</label>
          <label>{{ this.data.current.precip_mm }}mm</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1">UV</label>
          <label>{{ this.data.current.uv }}</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1">Feelslike</label>
          <label>{{ this.data.current.feelslike_c }}ºC</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1">Pressure</label>
          <label>{{ this.data.current.pressure_mb }} mBar</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1">Wind Gust</label>
          <label>{{ this.data.current.gust_kph }} kph</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1">Clouds</label>
          <label>{{ this.data.current.cloud }}%</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1">Visibility</label>
          <label>{{ this.data.current.vis_km }} Km</label>
        </div>
      </div>
      <div class="mt-1">
        <AirQuality :data="this.data.current.air_quality" />
      </div>
    </div>
  </div>
</template>
<script>
import WindIndicator from "@/components/WindIndicator.vue";
import AirQuality from "@/components/AirQuality.vue";
export default {
  components: {
    WindIndicator,
    AirQuality,
    // AddCitiesVue,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      city: "Barcelona",
      loading: true,
    };
  },
  methods: {
    roundTemp(temp) {
      return Math.round(temp);
    },
  },
};
</script>