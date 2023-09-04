<template>
  <div class="p-0 m-0  ">
    <div class="flex w-full justify-center">
      <div class="card w-[700px] h-96 ">
      <div class="flex flex-row justify-center">
        weather report
      </div>
        
    </div>
    </div>
  </div>
 <!-- <div class="relative ">
    <div class=" -z-50">
       {{ this.getImages() }}
      <img
        class="absolute -translate-y-1/4 object-cover overflow-y-hidden "
        src="https://images.unsplash.com/photo-1691672071535-b880995fb0e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0OTYxODd8MHwxfHNlYXJjaHwxMHx8cmFpbiUyMHN0cm9tfGVufDB8fHx8MTY5Mzg1OTY3M3ww&ixlib=rb-4.0.3&q=85"
        :alt="this.getImageUrl"
      />
      <div class="card w-[70%] m-20">
        weather
      </div>
    </div>
  </div>-->
</template>
<script>

export default {
  name: "WeatherForecast",
  components: {},
};
</script>
<style>
.card {
  backdrop-filter: blur(0px) saturate(180%);
  -webkit-backdrop-filter: blur(0px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
</style>