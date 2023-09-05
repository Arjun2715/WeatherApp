<template>
  <div class="card h-full">
    <div class="flex flex-col">
      <div class="flex-initial w-[400px] pt-5 ">
        <div class="input-container ">
          <input placeholder="Enter text" class="input-field" type="text" />
          <label for="input-field" class="input-label">Enter a city</label>
          <span class="input-highlight"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.card {
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 32px;
}

/* Input container */
.input-container {
  position: relative;
  margin: 20px;
}

/* Input field */
.input-field {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #818181;
  outline: none;
  background-color: transparent;
}

/* Input label */
.input-label {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 16px;
  color: rgba(204, 204, 204, 0);
  pointer-events: none;
  transition: all 0.3s ease;
}

/* Input highlight */
.input-highlight {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background-color: #007bff;
  transition: all 0.3s ease;
}

/* Input field:focus styles */
.input-field:focus + .input-label {
  top: -20px;
  font-size: 12px;
  color: #007bff;
}

.input-field:focus + .input-label + .input-highlight {
  width: 100%;
}

</style>