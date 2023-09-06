<template>
  <div class="body overflow-hidden" :style="{ backgroundImage: `url('${getImageUrl}')` }">
      <WeatherForecast/>
  </div>
</template>

<script>
import axios from "axios";
import WeatherForecast from '@/views/WeatherForecast.vue'
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    // HelloWorld
    /* eslint-disable */
    WeatherForecast
  },
  data() {
    return {
      data: null,
      getImageUrl: "",
    };
  },
  mounted() {
     this.loadData();
     this.getImages();
  },
  methods: {
    loadData() {
      // const randomIndex = Math.floor(Math.random() * this.data.length);

      // var weather = ["sunny", "cloudy", "windy", "rainy", "stormy"]
        axios
          .get(
            "https://api.unsplash.com/search/photos/?client_id=oUd4FG2-casjWkPRoLWjbC1tic0Zgjyg3SDa7gSunlk&query=cloudy"
          )
          .then((response) => {
            this.data = response.data.results;
            // console.log(this.data);
          })
          .catch(() => {
            console.error("ERROR");
            // self.$router.push({ name: "Sign In" });
          })
          .finally(() => {
            // this.loading = false;

            this.getImages();
          });
    },
    getImages() {
      const randomIndex = Math.floor(Math.random() * this.data.length);
      const randomUrl = this.data[randomIndex].urls.full;
      console.log(randomIndex + "  " + randomUrl );

      return (this.getImageUrl = randomUrl);
    },
  },
}
</script>
<style>
.body {
    background-position: center;
    background-size: cover; 
    background-repeat: no-repeat;
    margin: 0; /* Remove default body margin */
    padding: 0; /* Remove default body padding */
    height: 100vh; /* Ensure the body takes the full viewport height */
}
</style>