<template>
  <div id="app">
    <navbar></navbar>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>

<style>
.content {
  padding-top: 66px;
}
</style>
