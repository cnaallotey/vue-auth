<template>
  <div>
    <div class="w-full">
      <div class="max-w-screen-xl pt-7 pb-5 mx-auto px-5 xl:px-0">
        <div class="w-full flex justify-between items-center">
          <router-link to="/" class="cursor-pointer select-none">
            <p class="text-white font-extrabold text-2xl">UX GEEK</p>
          </router-link>
          <div class="space-x-2">
            <div
              class="flex items-center space-x-2"
              v-if="!$store.state.user && $route.name === 'Home'"
            >
              <router-link
                to="/login"
                class="text-base font-medium px-5 py-3 text-sky-500 bg-transparent"
                >Login</router-link
              >
              <router-link
                to="/register"
                class="text-base font-medium px-5 py-3 bg-sky-500 text-white shadow-lg hover:shadow-xl hover:bg-sky-600 rounded-lg"
                >Register
              </router-link>
            </div>
            <button
              v-if="$route.name === 'Dashboard'"
              @click="$store.dispatch('logout')"
              class="text-base font-medium px-5 py-3 text-white shadow-lg hover:shadow-xl hover:bg-sky-600 hover:bg-opacity-10 rounded-lg"
            >
              Logout
            </button>
            <router-link
              v-if="$store.state.user && $route.name === 'Home'"
              to="/dashboard"
              class="text-base font-medium px-5 py-3 bg-sky-500 text-white shadow-lg hover:shadow-xl hover:bg-sky-600 rounded-lg"
              >DashBoard
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onBeforeMount } from "vue";
import router from "../main";

export default {
  setup() {
    const store = useStore();

    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });
  },
  computed: {},
};
</script>
