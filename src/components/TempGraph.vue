<template>
  <div class="text-white flex-row overflow-hidden px-4 card rounded-3xl my-2 ">
  <div class="flex flex-row opacity-50">
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
        <!-- SVG Path Content -->
    </svg>
    <label for="">24-hour forecast</label>
  </div>

  <div class="flex flex-row space-x-10 overflow-x-auto">
    <div
      v-for="(item, index) in data.forecast.forecastday[0].hour"
      :key="index"
      class="flex flex-col"
    >
      <img class="w-20" :src="item.condition.icon" alt="" />
      <label class="text-3xl w-[80px] font-light self-start">{{ item.temp_c }}ºC</label>
      <label class="text-sm font-light self-center">{{ item.wind_kph }}Km/h</label>
      <label class="self-center">{{ formatTimeFromDate(item.time) }}</label>
    </div>
  </div>
</div> 
</template>
<script> 
import vueCustomScrollbar from "vue-custom-scrollbar/src/vue-scrollbar.vue";
export default {
  component: {
    vueCustomScrollbar, 
  },
  props: {
    data: Object, // this.data.forecast.forecastday[0].hour
  },

  methods: { 
    formatTimeFromDate(dateString) {
      // Parse the date string into a Date object
      const date = new Date(dateString);

      // Extract the hours and minutes
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");

      // Construct the time string in the HH:MM format
      const timeString = `${hours}:${minutes}`;

      return timeString;
    },
  },
  data() {
    return {
      settings: {
        suppressScrollY: false,
        suppressScrollX: false,
        wheelPropagation: false,
      },
    };
  },
};
</script>
<style>
.scroll-area {
  position: relative;
  margin: auto;
  width: 850px;
  height: 350px;
}
</style>