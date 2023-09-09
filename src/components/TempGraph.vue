<template>
  <div>
    <div class="text-white w-full overflow-hidden overflow-x-scroll">
      <div class="flex flex-row h-auto w-[850px] mr-4">
        <vue-custom-scrollbar
    class="scroll-area"
    :settings="settings"
    @ps-scroll-y="scrollHanle"
    >
        <div
          v-for="(item, index) in this.data.forecast.forecastday[0].hour"
          :key="index"
          class=""
        >
          <div class="flex flex-col w-[200px]">
            <label class="text-6xl font-light self-start"
              >{{ item.temp_c }}ºC</label
            >
            <label class="self-start">{{
              formatTimeFromDate(item.time)
            }}</label>
          </div>
        </div>
  </vue-custom-scrollbar>

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
    scrollHanle(evt) {
      console.log(evt);
    },
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
        suppressScrollX: true,
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
  width: 600px;
  height: 350px;
}
</style>