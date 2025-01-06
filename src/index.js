import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { registerServiceWorker } from "./serviceWorker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker
registerServiceWorker();

// Handle the beforeinstallprompt event for Android
let deferredPrompt;

// Listen for the 'beforeinstallprompt' event (only for Android)
window.addEventListener("beforeinstallprompt", (event) => {
  // Log when the event is fired
  console.log("beforeinstallprompt event fired");

  // Prevent the mini-infobar from appearing
  event.preventDefault();
  deferredPrompt = event;

  // Dynamically create the install button for Android
  const installDiv = document.createElement("div");
  installDiv.id = "installAppDiv";
  installDiv.innerHTML = `
    <div class="install-popup">
      <p>Install our app for a better experience!</p>
      <button id="installApp" class="btn btn-primary">Install</button>
    </div>
  `;
  document.body.appendChild(installDiv);

  // Add click listener to the install button for Android
  document.getElementById("installApp").addEventListener("click", () => {
    // Show the native install prompt
    deferredPrompt.prompt();

    // Wait for the user to make a choice
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt.");
      } else {
        console.log("User dismissed the install prompt.");
      }
      deferredPrompt = null; // Clear the prompt after use
      document.body.removeChild(installDiv); // Remove the install button
    });
  });
});

// Handle the iOS installation prompt (custom prompt)
if (navigator.userAgent.match(/iPhone|iPad|iPod/)) {
  // Display a custom banner or prompt for iOS
  const iosInstallBanner = document.createElement("div");
  iosInstallBanner.innerHTML = `
    <div style="position: fixed; bottom: 0; left: 0; width: 100%; background: #000; color: #fff; text-align: center; padding: 10px; font-size: 16px;">
      <p>To install, tap the Share button and select "Add to Home Screen".</p>
    </div>
  `;
  document.body.appendChild(iosInstallBanner);
}
