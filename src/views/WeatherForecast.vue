<template>
    <div>

    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'WeatherForecast',
  components: {
  },
  data() {
    return {
      data: null,
    }
  },
  mounted() {
    this.loadData();
    this.getImages();
  },
  methods: {
    
    loadData() {
      axios
        .get("https://api.unsplash.com/search/photos/?client_id=oUd4FG2-casjWkPRoLWjbC1tic0Zgjyg3SDa7gSunlk&query=Rain Strom")
        .then((response) => {
          
            this.data = response;
            // console.log(this.data);
          
        })
        .catch(() => {
          console.error("ERROR");
          // self.$router.push({ name: "Sign In" });
        })
        .finally(() => {
          // this.loading = false;
          setTimeout(() => {
        this.getImages();
      }, 500);
        });
    },
    getImages(){
      console.log(this.data);
    },
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
</style>
