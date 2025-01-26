<template>
  <div class="wind-indicator">
    <div class="compass">
      <div class="direction-n">N</div>
      <div class="direction-e">E</div>
      <div class="direction-w">W</div>
      <div class="direction-s">S</div>
      <div class="arrow" :style="arrowRotation"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wind_degree: Number,
    wind_dir: String,
  },
  computed: {
    windDirection() {
      return this.wind_dir;
    },
    arrowRotation() {
      return `transform: rotate(${this.wind_degree}deg)`;
    },
  },
};
</script>

<style scoped>
.wind-indicator {
  text-align: center;
  font-family: Arial, sans-serif;
}

.compass {
  position: relative;
  width: 70px;
  height: 70px;
  border: 4px solid #c4c4c4;
  border-radius: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 80%;
}

.arrow {
  width: 2px;
  height: 15px;
  background-color: #c4c4c4;
  position: absolute;
  top: 50%; /* Center vertically */
  left: 50%; /* Center horizontally */
  transform-origin: bottom; /* Rotate from the bottom */
  transform: translateX(-50%) translateY(-100%) rotate(0deg); /* Adjust position */
  transition: transform 0.5s ease-in-out;
}

.arrow::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 10px solid #c4c4c4;
  position: absolute;
  bottom: -9px;
  left: -3px;
  transform: rotate(180deg);
}

.direction-n,
.direction-e,
.direction-w,
.direction-s {
  position: absolute;
  font-weight: lighter;
  font-size: 10px;
  opacity: 80%;
}

.direction-n {
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
}

.direction-e {
  top: 50%;
  left: calc(100% - 10px);
  transform: translateY(-50%);
}

.direction-w {
  top: 50%;
  left: 1px;
  transform: translateY(-50%);
}

.direction-s {
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
}
</style>  