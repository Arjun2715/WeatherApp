<template>
  <div v-if="loading" class="card rounded-3xl text-white">
    <div class="flex flex-col">
      <div class="w-auto  md:pt-3">
        <!-- <AddCitiesVue/> -->
      </div>
      <div class="hidden md:flex lg:w-[400px] space-x-4 justify-between h-[150px] p-4 pt-7 md:grow">
        <label class="text-6xl">{{ roundTemp(this.data.current.temp_c)  }}ºC</label>
        <div class="">
          <div class="flex flex-col">
          <label for="">Max Temp: {{ this.data.forecast.forecastday[0].day.maxtemp_c }} ºC</label>
          <label for="">Min Temp: {{ this.data.forecast.forecastday[0].day.mintemp_c }} ºC</label>
          <label for="">Avg Temp: {{ this.data.forecast.forecastday[0].day.avgtemp_c }} ºC</label>
        </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF20] rounded-3xl p-4 h-[100px] mb-1">
        <div class="flex flex-row justify-between">
          <div>
            <div class="flex">
              <label class="mr-4">Wind Speed</label>
              <label for="">{{ this.data.current.wind_kph }}km/h</label>
            </div>
            <div class="flex">
              <label class="mr-4">Wind Direction</label>
              <label for="">{{ this.data.current.wind_dir }}</label>
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
      <div class="bg-[#FFFFFF20] rounded-3xl p-4  h-[100px] mb-1">
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
          <div>
            sun
          </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF20] rounded-3xl p-4 h-[300px] mb-1 flex-1">
        <div class="flex flex-row">
          <label class="flex-1"> Humidity </label>
          <label for="">{{ this.data.current.humidity }}%</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Chance of Rain </label>
          <label for="">{{ this.data.current.precip_mm }}mm</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> UV </label>
          <label for="">{{ this.data.current.uv }}</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Feelslike </label>
          <label for="">{{ this.data.current.feelslike_c }}º C</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Pressure </label>
          <label for="">{{ this.data.current.pressure_mb }} mBar</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Windchill</label>
          <label for="">{{ this.data.current.humidity }}null</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Wind Gust</label>
          <label for="">{{ this.data.current.gust_kph }} kph</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Clouds</label>
          <label for="">{{ this.data.current.cloud }}%</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Heatindex</label>
          <label for="">{{ this.data.current.humidity }}null</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Visibility</label>
          <label for="">{{ this.data.current.vis_km }} Km</label>
        </div>
      </div>
      <div>
        <AirQuality :data="this.data.current.air_quality"/>
      </div>
    </div>
  </div>
  <div v-else>
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
</template>
<script>
import WindIndicator from "@/components/WindIndicator.vue";
import AirQuality from '@/components/AirQuality.vue';
export default {
  components: {
    WindIndicator,
    AirQuality
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
    roundTemp(temp){
      return Math.round(temp);
    }
  },
};
</script>