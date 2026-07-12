(function () {
  var banner = document.getElementById("consent-banner");
  if (!banner || typeof gtag !== "function") return;

  var saved = null;
  try { saved = localStorage.getItem("cerez-izni"); } catch (e) {}

  if (saved === "granted") {
    gtag("consent", "update", { analytics_storage: "granted" });
  } else if (saved !== "denied") {
    banner.hidden = false;
  }

  function choose(value) {
    try { localStorage.setItem("cerez-izni", value); } catch (e) {}
    if (value === "granted") {
      gtag("consent", "update", { analytics_storage: "granted" });
    }
    banner.hidden = true;
  }

  document.getElementById("consent-accept").addEventListener("click", function () { choose("granted"); });
  document.getElementById("consent-reject").addEventListener("click", function () { choose("denied"); });
})();

(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("nav-menu");
  if (!toggle || !menu) return;

  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();
