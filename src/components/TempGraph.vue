<template>
  <div class=" text-white">

    <vue-custom-scrollbar
      class="scroll-area"
      :settings="settings"
      @ps-scroll-x="scrollHanle"
    >

      <div class="overflow-hidden">
        <div class="flex flex-row h-auto  mr-4">
        <div
          v-for="(item, index) in this.data.forecast.forecastday[0].hour"
          :key="index"
          class=""
        >
          <div class="flex flex-col w-[200px] pr-6">
            <label class="text-6xl font-light self-start"
              >{{ item.temp_c }}ºC</label
            >
            <label class="self-start">{{ formatTimeFromDate(item.time) }}</label>
          </div>
        </div>
      </div>
      </div>
    </vue-custom-scrollbar>
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
  width: 1250px;
  height: 350px;
}
</style>