<template>
  <div
    class="text-white lg:w-[1000px] md:w-[600px] overflow-hidden px-4 card rounded-3xl my-2"
  >
    <div class="flex flex-row opacity-50">
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
          <path
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            fill="#FFFFFF"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
            fill="#000000"
          ></path>
      </svg>
      <label for=""> 24-hour forecast</label>
    </div>

    <div class="flex flex-row space-x-10 overflow-x-scroll">
      <div
        v-for="(item, index) in data.forecast.forecastday[0].hour"
        :key="index"
        class="flex flex-col"
      >
        <img class="w-20" :src="item.condition.icon" alt="" />
        <label class="text-3xl w-[80px] font-light self-start"
          >{{ item.temp_c }}ºC</label
        ><label class="text-sm font-light self-center"
          >{{ item.wind_kph }}Km/h</label
        >

        <label class="self-center">{{ formatTimeFromDate(item.time) }}</label>
      </div>
    </div>
  </div>

  <!-- <div class="text-white w-full overflow-hidden overflow-x-scroll">
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
    </div> -->
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