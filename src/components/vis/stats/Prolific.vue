<template>
  <div class="tile is-child">
    <p class="title">Big Sender!</p>
    <p>
      {{biggestSender()}} has sent the most messages at
      {{messageCount[biggestSender()]}}
    </p>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  computed: {
    messageCount: function() {
      let messageCounts = {} as any;
      let senderName;

      for (const i of this.messages) {
        senderName = i.sender_name;
        messageCounts[senderName] = (messageCounts[senderName] || 0) + 1;
      }
      return messageCounts;
    }
  },
  methods: {
    biggestSender: function() {
      const bs = Object.keys(this.messageCount).reduce((a, b) =>
        this.messageCount[a] > this.messageCount[b] ? a : b
      );
      return bs;
    }
  },
  props: ["messages"]
});
</script>
