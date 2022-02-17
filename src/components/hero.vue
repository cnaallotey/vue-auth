<template>
  <div
    class="w-full px-5 lg:px-10 xl:px-0 bg-transparent bg-scroll bg-cover overflow-hidden"
  >
    <div class="max-w-screen-xl mx-auto py-32 lg:py-40">
      <div class="flex flex-col lg:items-center lg:flex-row lg:space-x-20">
        <div class="w-full lg:block relative lg:w-1/2 overflow-hidden">
          <div class="w-full rounded-full overflow-hidden mb-10">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_rk5aunh5.json"
              class="w-full"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
        <div class="w-full lg:w-1/2 lg:px-0">
          <h1 class="text-6xl md:text-6xl text-white font-extrabold">
            Something amazing is coming
          </h1>
          <p class="text-base md:text-xl font-light text-slate-300 mt-10">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
            cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div class="mt-10 flex flex-col lg:flex-row lg:space-x-5">
            <button
              class="px-8 py-5 bg-orange-600 text-white text-lg rounded-md font-medium"
            >
              Join Now
            </button>
            <button
              class="px-8 py-5 bg-white text-blue-800 text-lg rounded-md font-medium mt-5 lg:mt-0"
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
