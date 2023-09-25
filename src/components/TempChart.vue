<template>
  <div class="w-full">
    <canvas
      id="myChart"
      width="400"
      height="100"
      class="bg-[#FFFFFF0] rounded-[30px]"
    ></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  props: {
    data: Object,
  },
  data() {
    return {};
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
  mounted() {
    // console.log("component Mounted");
    const ctx = document.getElementById("myChart");
    const labels = [];
    const tempData = [];
    this.data.forecast.forecastday[0].hour.forEach((item) => {
      labels.push(this.formatTimeFromDate(item.time));
      tempData.push(item.temp_c);
    });
   
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Temperature in ºC",
          data: tempData,
          fill: false,
           borderColor: "#FFA500",
        
          tension: 0.4,
          borderJoinStyle: "round",
          beginAtZero: true,
        },
      ],
    };
    const myChart = new Chart(ctx, {
      type: "line",
      data: data,
      //       options: {
      //     scales: {
      //       y: {
      //         beginAtZero: true
      //       }
      //     }
      //   }
    });
    myChart;
  },
};
</script>

<style>
</style>