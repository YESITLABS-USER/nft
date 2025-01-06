import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Check and register the service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("Service Worker registered with scope:", registration.scope);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

// Handle the beforeinstallprompt event for Android
let deferredPrompt;

// Listen for the 'beforeinstallprompt' event (only for Android)
window.addEventListener("beforeinstallprompt", (event) => {
  console.log("beforeinstallprompt event fired");

  // Prevent the mini-infobar from appearing
  event.preventDefault();
  deferredPrompt = event;

  // Create the install button
  const installDiv = document.createElement("div");
  installDiv.id = "installAppDiv";
  installDiv.innerHTML = `
    <div class="install-popup">
      <p>Install our app for a better experience!</p>
      <button id="installApp" class="btn btn-primary">Install</button>
    </div>
  `;
  document.body.appendChild(installDiv);

  // Add click listener to the install button
  document.getElementById("installApp").addEventListener("click", () => {
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt.");
      } else {
        console.log("User dismissed the install prompt.");
      }
      deferredPrompt = null; // Clear the prompt
      document.body.removeChild(installDiv); // Remove the button
    });
  });
});

// Handle the iOS custom installation prompt
if (navigator.userAgent.match(/iPhone|iPad|iPod/)) {
  const iosInstallBanner = document.createElement("div");
  iosInstallBanner.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #000;
      color: #fff;
      text-align: center;
      padding: 10px;
      font-size: 16px;
      z-index: 1000;">
      <p>To install, tap the Share button and select "Add to Home Screen".</p>
    </div>
  `;
  document.body.appendChild(iosInstallBanner);
}

// Render the React application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
