<template>
  <div
    class="w-full h-screen fixed top-0 bottom-0 left-0 right-0 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center z-50"
  >
    <div class="box-loading relative flex items-center justify-center">
      <div class="absolute scale-150">
        <div class="loading" v-for="i in 6" :key="i">
          <div class="lingkaran"></div>
        </div>
      </div>
    </div>
    <div class="mt-24 font-medium text-primary">Memuat Data</div>
  </div>
</template>