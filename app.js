const version = "1.0.0";
const fileSize = "15 MB";

document.getElementById(
  "versionInfo"
).textContent = `Version ${version} • ${fileSize}`;

document.getElementById("downloadBtn").addEventListener("click", () => {
  console.log("Download initiated");
});
