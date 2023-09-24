<template>
  <div class="bg-[#FFFFFF20] rounded-3xl p-4  flex-1">
    <div class="flex flex-row">
          <label class="flex-1"> CO </label>
          <label for="">{{ this.data.co }}</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> NO2 </label>
          <label for="">{{ this.data.no2 }}</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> O3 </label>
          <label for="">{{ this.data.o3 }}</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> SO2 </label>
          <label for="">{{ this.data.so2 }}</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> PM2.5 </label>
          <label for="">{{ this.data.pm2_5 }}</label>
        </div>
        <hr />
        <div class="flex flex-row">
          <label class="flex-1"> PM10 </label>
          <label for="">{{ this.data.pm10 }}</label>
        </div>
        <hr />
  </div>
</template>

<script>
export default {
    props:{
        data: Object,
    }
}
</script>