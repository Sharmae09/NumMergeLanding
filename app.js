const { createApp } = Vue;

createApp({
  data() {
    return {
      apkUrl: "/downloads/number-merge.apk",
      version: "1.0.0",
      fileSize: "15 MB",
    };
  },
  methods: {
    trackDownload() {
      console.log("Download initiated");
    },
  },
}).mount("#app");
