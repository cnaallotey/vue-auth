<template>
  <div>
    <!-- component -->
    <!-- Create by joker banny -->
    <div class="">
      <div class="max-w-screen-sm mx-auto mt-10">
        <form class="bg-white w-full p-10 rounded-lg shadow-lg">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_0mohmgca.json"
            background="transparent"
            speed="1"
            class="w-64 mx-auto"
            loop
            autoplay
          ></lottie-player>
          <h1 class="text-center text-2xl mb-6 text-gray-900 font-bold">Register</h1>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="username"
              >Username</label
            >
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="username"
              id="username"
              placeholder="username"
            />
          </div>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="email"
              >Email</label
            >
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="email"
              id="email"
              placeholder="@email"
            />
          </div>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="password"
              >Password</label
            >
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="password"
              id="password"
              placeholder="password"
            />
          </div>
          <div>
            <label class="text-gray-800 font-semibold block my-3 text-md" for="confirm"
              >Confirm password</label
            >
            <input
              class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
              type="text"
              name="confirm"
              id="confirm"
              placeholder="confirm password"
            />
          </div>
          <button
            type="submit"
            class="w-full mt-6 bg-indigo-600 rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold"
          >
            Register
          </button>
          <button
            type="submit"
            class="w-full mt-6 mb-3 hidden bg-indigo-100 rounded-lg px-4 py-2 text-lg text-gray-800 tracking-wide font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
