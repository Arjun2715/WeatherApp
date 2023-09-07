<template>
  <div>
    <div v-if="!this.loading" class="body overflow-hidden" :style="{ backgroundImage: `url('${getImageUrl}')` }">
      <WeatherForecast/>
      {{ this.data.current.condition.text }}
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
      imgData: null,
      data: null,
      getImageUrl: "",
      loading: true,
      imagePrompt: "",


    };
  },
  mounted() {
    this.loadDataForecast();
    setTimeout(() => {
    this.loadData();
    }, "100");
  },
  methods: {
    
    loadData() {
      this.imagePrompt = this.data.current.condition.text;
      // const randomIndex = Math.floor(Math.random() * this.data.length);

      // var weather = ["sunny", "cloudy", "windy", "rainy", "stormy"]
        axios
          .get(
            "https://api.unsplash.com/search/photos/?client_id=oUd4FG2-casjWkPRoLWjbC1tic0Zgjyg3SDa7gSunlk&query="+this.imagePrompt
          )
          .then((response) => {
            this.imgData = response.data.results;
            // console.log(this.data);
          })
          .catch(() => {
            console.error("ERROR");
            // self.$router.push({ name: "Sign In" });
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
          console.log(this.data);
        })
        .catch(() => {
          console.error("ERROR");
          // self.$router.push({ name: "Sign In" });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    getImages() {
      const randomIndex = Math.floor(Math.random() * this.imgData.length);
      const randomUrl = this.imgData[randomIndex].urls.full;
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
.wrapper {
  height: 200px;
}

.cloud {
  overflow: hidden;
  padding: 5px;
  height: 50px;
}

.cloud_left {
  position: relative;
  float: left;
  background-color: #234;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);
}

.cloud_right {
  position: relative;
  float: left;
  background-color: #203040;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  top: 15px;
  left: -30px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.75);
}

.rain {
  width: 180px;
  height: 140px;
}

.drop {
  position: relative;
  float: left;
  width: 2px;
  margin: 10px;
  left: 20px;
  background: #789;
  box-shadow: 1px 0.5px 1px 0.5px rgba(0, 0, 0, 0.75);
  animation: rain_401 0.8s infinite ease-out;
}

.drop:nth-child(1) {
  height: 15px;
  top: 5px;
  animation-delay: -1.0s;
}

.drop:nth-child(2) {
  height: 20px;
  animation-delay: -1.4s;
}

.drop:nth-child(3) {
  height: 15px;
  top: 5px;
  animation-delay: -1.6s;
}

.drop:nth-child(4) {
  height: 10px;
  top: 10px;
  animation-delay: -1.2s;
}

.drop:nth-child(5) {
  height: 5px;
  top: 15px;
  animation-delay: -1.6s;
}

@keyframes rain_401 {
  0% {
    opacity: 1;
    transform: translate(0, 0);
  }

  100% {
    opacity: 0.2;
    transform: translate(0, 100px);
  }
}

.surface {
  position: relative;
  width: 180px;
  height: 140px;
  top: -140px;
}

.hit {
  position: absolute;
  width: 3px;
  height: 1px;
  margin: 10px;
  bottom: -5px;
  border: 1px solid #456;
  border-radius: 50%;
  animation: hit_401 0.8s infinite ease;
}

.hit:nth-child(1) {
  left: 19px;
  animation-delay: -0.3s;
}

.hit:nth-child(2) {
  left: 41px;
  animation-delay: -0.7s;
}

.hit:nth-child(3) {
  left: 63px;
  animation-delay: -0.9s;
}

.hit:nth-child(4) {
  left: 85px;
  animation-delay: -0.5s;
}

.hit:nth-child(5) {
  left: 107px;
  animation-delay: -0.9s;
}

@keyframes hit_401 {
  0% {
    opacity: 0.75;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(2.5);
  }
}
</style>