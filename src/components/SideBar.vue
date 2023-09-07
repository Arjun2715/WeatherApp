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
          <div class="flex ">
            <label class="mr-4">Wind Direction</label>
            <label for="">{{ this.data.current.wind_dir }}</label>
          </div>
          </div>
          <div>
            direcction
          </div>
        </div>
      </div>
      <div class="bg-[#FFFFFF10] rounded-[30px] p-4 h-[100px] mb-1">
        <div class="flex flex-row">
          <div class="flex flex-col">
            <label for="">sunrise</label>
            <label for="">sunset</label>
          </div>
          <div></div>
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
            >{{ this.data.current.humidity }} null change at time H</label
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
  color: rgba(204, 204, 204, 0);
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