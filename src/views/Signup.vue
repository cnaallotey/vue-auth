<template>
  <div>
    <register />
  </div>
</template>

<script>
import register from "../components/register.vue";
import { onBeforeMount } from "@vue/runtime-core";
import { auth } from "../firebase/auth.js";

export default {
  components: { register },
  setup() {
    onBeforeMount(() => {
      if (auth.currentUser) {
        router.push("/");
      }
    });
  },
};
</script>
