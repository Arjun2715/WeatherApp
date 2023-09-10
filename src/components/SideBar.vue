<template>
  <div class="card rounded-3xl text-white">
    <div class="flex flex-col">
      <div class="w-auto md:min-w-[280px] sm:min-w-[280px] md:pt-3"></div>
      <div class="hidden md:flex h-[150px] p-4 pt-7">
        <p class="text-6xl">{{ this.data.current.temp_c }}º</p>
      </div>
      <div class="bg-[#FFFFFF10] rounded-3xl p-4 h-[100px] mb-1">
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
            <svg
              width="64px"
              height="64px"
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
                  d="M15 13.5V9M15 9H10.5M15 9L9.00019 14.9999M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF10] rounded-3xl p-4 h-[100px] mb-1">
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
            <svg
              width="56px"
              height="56px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L5 11M18 12L19 11M3 18H21M5 21H19M7 18C7 15.2386 9.23858 13 12 13C14.7614 13 17 15.2386 17 18M12 6V10M12  "
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF10] rounded-3xl p-4 h-[300px] flex-1">
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
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      city: "Barcelona",
    };
  },
};
</script>