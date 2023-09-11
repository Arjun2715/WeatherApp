<template>
  <div>
    <div class="flex flex-row m-2">
      <!-- <button @click="reset">Reset</button> -->
      <div class="input-container grow">
        <input type="text" id="input" required="" v-model="inputText" />
        <label for="input" class="label">Enter a City</label>
        <div class="underline"></div>
      </div>
      <div class="flex self-center card rounded-full px-4 m-6">
        <button class="" @click="addString">Add</button>
      </div>
    </div>
    <div>
      <div class="p-2">
        <!-- <label>Stored Strings:</label> -->
        <ul>
          <li v-for="(str, index) in storedStrings" :key="index">
            {{ str }}
            <button
              @click="removeString(index)"
              class="bin card rounded-full px-2"
            >
              Remove
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const inputText = ref('');
    const storedStrings = computed(() => store.getters.getStoredStrings);

    const addString = () => {
      store.commit('ADD_STRING', inputText.value);
      inputText.value = ''; // Clear the input field
    };

    const removeString = (index) => {
      store.commit('REMOVE_STRING', index);
    };
    
    return {
      inputText,
      storedStrings,
      addString,
      removeString,
    };
  },
  
  methods:{
   
  }
}
</script>
  <style>
.input-container {
  position: relative;
  margin: 20px auto;
  width: fit-content;
}

.input-container input[type="text"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: #c7c7c7;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}
</style>