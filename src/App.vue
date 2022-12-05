<template>
  <div id="app">
    <SearchCity />
    <SearchUser style="margin-top: 216px" />
  </div>
</template>

<script>
import SearchCity from "@/components/SearchCity.vue";
import SearchUser from "./components/SearchUser.vue";
export default {
  name: "App",
  components: {
    SearchCity,
    SearchUser,
  },
};
</script>

<style lang="scss">
*,
body {
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  padding: 150px;
}
</style>
