<template>
  <section class="homepage">
    <Navbar/>
    <Welcome/>
    <div class="container is-fluid">
      <Upload/>
      <Contents
        :participants="this.$store.getters.participants"
        :messages="this.$store.getters.messages"
      />
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Navbar from "./Navbar";
import Upload from "./Upload";
import Welcome from "./WelcomeBanner";
import Contents from "./vis/Contents";

export default Vue.extend({
  components: {
    Navbar,
    Upload,
    Welcome,
    Contents
  }
});
</script>
