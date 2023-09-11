<template>
    <div>
      <p>Counter: {{ counter }}</p>
      <button @click="increment">Increment</button>
      <button @click="reset">Reset</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        counter: 0,
      };
    },
    methods: {
      increment() {
        this.counter++;
        this.saveData();
      },
      reset() {
        this.counter = 0;
        this.saveData();
      },
      saveData() {
        // Save the counter value to LocalStorage
        localStorage.setItem('counter', this.counter.toString());
      },
    },
    mounted() {
      // Load the counter value from LocalStorage when the component is mounted
      const storedCounter = localStorage.getItem('counter');
      if (storedCounter) {
        this.counter = parseInt(storedCounter, 10);
      }
    },
  };
  </script>
  