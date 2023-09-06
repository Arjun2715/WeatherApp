<template>
  <div class="h-[200px] w-full text-white">
    <div class="">graph here</div>
    <div class="">graph temp here</div>
    <div class="flex flex-row">
      <div class="flex-1 w-30 h-30 rounded-2xl p-2 m-2">
        <div class="flex flex-col">
          <label class="text-6xl font-light self-center">22º</label>
          <label class="self-center">Madrid</label>
        </div>
      </div>
      <div class="flex-1 w-30 h-30 rounded-2xl p-2 m-2">
        <div class="flex flex-col">
          <label class="text-6xl font-light self-center">25º</label>
          <label class="self-center">canary Islands</label>
        </div>
      </div>
      <div class="flex-1 w-30 h-30 rounded-2xl p-2 m-2">
        <div class="flex flex-col">
          <label class="text-6xl font-light self-center">18º</label>
          <label class="self-center">Vigo</label>
        </div>
      </div>
      <div class="flex-1 w-30 h-30 rounded-2xl p-2 m-2">
        <div class="flex flex-col">
          <label class="text-6xl font-light self-center">26º</label>
          <label class="self-center">Sevilla</label>
        </div>
      </div>
      <div class="flex-1 w-30 h-30 rounded-2xl p-2 m-2">
        <div class="flex flex-col">
          <label class="text-6xl font-light self-center">24º</label>
          <label class="self-center">Valencia</label>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
            data: Object,
        }
};
</script>
<style>
</style>