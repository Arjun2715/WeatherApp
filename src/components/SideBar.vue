<template>
  <div class="card grow text-white">
    <div class="flex flex-col h-full grow">
      <div class="flex-initial w-[400px] h-full pt-3">
        <div class="input-container">
          <input placeholder="Enter text" class="input-field" type="text" />
          <label for="input-field" class="input-label">{{
            this.data.city
          }}</label>
          <span class="input-highlight"></span>
        </div>
      </div>
      <div class="h-[150px] p-4 pt-7">
        <p class="text-6xl">{{ this.data.current.temp_c }}º</p>
      </div>
      <div class="bg-[#FFFFFF10] rounded-[30px] p-4 h-[100px] mb-1">
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
      <div class="bg-[#FFFFFF10] rounded-[30px] p-4 h-[100px] mb-1">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <div class="flex flex-row justify-between">
              <label class="mr-4">sunrise</label>
              <label for="">{{ this.data.forecast.forecastday[0].astro.sunrise }}</label>
            </div>
            <div class="flex flex-row">
              <label class="mr-4">sunset</label>
              <label for="">{{ this.data.forecast.forecastday[0].astro.sunset }}</label>
            </div>
          </div>
          <div>
            sun position here
          </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF10] rounded-[30px] p-4 h-[300px] flex flex-col">
        <div class="flex flex-row">
          <label class="flex-1"> Humidity </label>
          <label for="">{{ this.data.current.humidity }}%</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> Chance of Rain </label>
          <label for=""
            >{{ this.data.current.precip_mm }}</label
          >
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
          <label for=""
            >{{ this.data.current.humidity }}null change at time H</label
          >
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
          <label for=""
            >{{ this.data.current.humidity }}null change at time H</label
          >
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
<style>
.card {
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 32px;
}

/* Input container */
.input-container {
  position: relative;
  margin: 20px;
}

/* Input field */
.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #818181;
  outline: none;
  background-color: transparent;
}

/* Input label */
.input-label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: rgb(204, 204, 204);
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Input highlight */
.input-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #2c2c2c;
  transition: all 0.3s ease;
}

/* Input field:focus styles */
.input-field:focus + .input-label {
  top: -20px;
  font-size: 12px;
  color: #007bff;
}

.input-field:focus + .input-label + .input-highlight {
  width: 100%;
}
hr {
  opacity: 20%;
}
</style>