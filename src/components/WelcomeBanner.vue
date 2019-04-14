<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">ChatVue</h1>
        <h2 class="subtitle">
          Upload a
          <strong>Facebook</strong> chat file and I will
          <strong>analyse</strong> it!
        </h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      name: "welcome"
    };
  }
});
</script>
