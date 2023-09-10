<template>
  <div>
    <div
      v-if="!this.loading"
      class="body md:overflow-hidden"
      :style="{ backgroundImage: `url('${getImageUrl}')` }"
    >
      <WeatherForecast />
      <!-- {{ this.data.current.condition.text }} -->
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
  </div>
</template>

<script>
import axios from "axios";
import WeatherForecast from "@/views/WeatherForecast.vue";
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "App",
  components: {
    // HelloWorld
    /* eslint-disable */
    WeatherForecast,
  },
  data() {
    return {
      imgData: null,
      data: null,
      getImageUrl: "",
      loading: true,
      imagePrompt: "",
      dayOrNight: "",
      location: "",
    };
  },
  mounted() {
    this.loadDataForecast();
    setTimeout(() => {
      this.loadData();
    }, "500");
  },
  methods: {
    loadData() {
      this.imagePrompt = this.data.current.condition.text;
      this.location = this.data.location.name;

      if (this.data.current.is_day) {
        this.dayOrNight = "Day";
      } else {
        this.dayOrNight = "Night";
      }

      this.region = this.data.location.country;
      axios
        .get(
          "https://api.unsplash.com/search/photos/?client_id=oUd4FG2-casjWkPRoLWjbC1tic0Zgjyg3SDa7gSunlk&query=" +
            this.imagePrompt +
            " " +
            this.dayOrNight  +
            " in "  + 
            this.location
        )
        .then((response) => {
          this.imgData = response.data.results;
          // console.log(this.data);
        })
        .catch(() => {
          console.error("ERROR");
        })
        .finally(() => {
          this.loading = false;
          this.getImages();
        });
    },
    loadDataForecast() {
      // var city = "Barcelona"
      axios
        .get(
          "https://api.weatherapi.com/v1/forecast.json?key=804c0854fbe7434bbc3123537233008&q=Barcelona&days=1&aqi=yes&alerts=yes"
        )
        .then((response) => {
          this.data = response.data;
          // console.log(this.data);
        })
        .catch(() => {
          console.error("ERROR");
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getImages() {
      const randomIndex = Math.floor(Math.random() * this.imgData.length);
      const randomUrl = this.imgData[randomIndex].urls.full;
      console.log(randomIndex + "  " + randomUrl);

      return (this.getImageUrl = randomUrl);
    },
  },
};
</script>