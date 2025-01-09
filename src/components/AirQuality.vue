<template>
  <div class="bg-[#FFFFFF20] rounded-3xl p-4 flex-1 h-auto">
    <div class="flex flex-row">
      <label class="flex-1">AQI</label>
      <div class="flex flex-row">
        <label for=""> {{ this.calculateAQI(this.data.pm2_5) }}</label>
        <svg
          height="24px"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFFFFF"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z"
            ></path>
            <rect width="24" height="24" fill="none"></rect>
          </g>
        </svg>
      </div>
    </div>
    <hr />
    <div class="flex flex-row">
      <label class="flex-1"> CO </label>
      <label for="">{{ this.data.co }}µg/m3</label>
    </div>
    <hr />
    <div class="flex flex-row">
      <label class="flex-1"> NO2 </label>
      <label for="">{{ this.data.no2 }}µg/m3</label>
    </div>
    <hr />
    <div class="flex flex-row">
      <label class="flex-1"> O3 </label>
      <label for="">{{ this.data.o3 }}µg/m3</label>
    </div>
    <hr />
    <div class="flex flex-row">
      <label class="flex-1"> SO2 </label>
      <label for="">{{ this.data.so2 }}µg/m3</label>
    </div>
    <hr />
    <div class="flex flex-row">
      <label class="flex-1"> PM2.5 </label>
      <label for="">{{ this.data.pm2_5 }}µg/m3</label>
    </div>
    <hr />
    <div class="flex flex-row">
      <label class="flex-1"> PM10 </label>
      <label for="">{{ this.data.pm10 }}µg/m3</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {};
  },
  methods: {
    calculateAQI(aqiValue) {
      // Define the AQI index ranges and corresponding ratings and suggestions
      const aqiRanges = [
        {
          min: 0,
          max: 50,
          rating: "Good",
          suggestion:
            "Air quality is considered satisfactory, and air pollution poses little or no risk.",
        },
        {
          min: 51,
          max: 100,
          rating: "Moderate",
          suggestion:
            "Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution. Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
        },
        {
          min: 101,
          max: 150,
          rating: "Unhealthy for Sensitive Groups",
          suggestion:
            "Members of sensitive groups may experience health effects. The general public is not likely to be affected. Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.",
        },
        {
          min: 151,
          max: 200,
          rating: "Unhealthy",
          suggestion:
            "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects. Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion.",
        },
        {
          min: 201,
          max: 300,
          rating: "Very Unhealthy",
          suggestion:
            "Health warnings of emergency conditions. The entire population is more likely to be affected. Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.",
        },
        {
          min: 301,
          max: Infinity,
          rating: "Hazardous",
          suggestion:
            "Health alert: everyone may experience more serious health effects. Everyone should avoid all outdoor exertion.",
        },
      ];
      // Find the AQI range that matches the current AQI value
      const matchedRange = aqiRanges.find(
        (range) => aqiValue >= range.min && aqiValue <= range.max
      );
      return matchedRange.rating;
    },
  },
};
</script>