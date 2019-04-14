<template>
  <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
    <div class="field">
      <div class="file is-centered is-boxed is-primary has-name">
        <label class="file-label">
          <input
            type="file"
            accept=".json"
            multiple
            :name="uploadFieldName"
            :disabled="isSaving"
            @change="filesChange(
                $event.target.name, 
                $event.target.files);"
            class="file-input"
          >
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Upload File</span>
          </span>
          <span class="file-name"></span>
        </label>
      </div>
    </div>
  </form>
</template>

<script>
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  name: "app",
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "messages"
    };
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    filesChange(fieldName, fileList) {
      const fr = new FileReader();
      fr.onloadend = this.handleFileRead;
      fr.readAsText(fileList[0]);
    },
    handleFileRead(e) {
      const json = JSON.parse(e.target.result);
      this.$store.dispatch("setChat", json);
    }
  },
  mounted() {
    this.reset();
  }
};
</script>