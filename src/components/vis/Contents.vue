<template>
  <div class="container">
    <div class="tile is-ancestor">
      <div class="tile is-8 notification is-primary">
        <Prolific :messages="messages"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Prolific from "./stats/Prolific";
export default Vue.extend({
  name: "Contents",
  props: ["participants", "messages"],
  components: {
    Prolific
  }
});
</script>
