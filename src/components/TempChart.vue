<template>
  <div class="w-full">
    <canvas
      id="myChart"
      width="400"
      height="100"
      style="font-size: 16px"
      class="card rounded-[30px] text-lg p-3 overflow-scroll"
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
      // Math.round
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
          beginAtZero: false,
          backgroundColor: "rgba(255, 255, 255)",
          pointHoverRadius: 8,
        },
      ],
    };
    const myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white",
              // This more specific font property overrides the global property
              font: {
                fontColor: "#FFFFFF",
              },
            },
          },
        },
      },
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