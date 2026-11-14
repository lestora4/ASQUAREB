
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("delivery-popup");
    if (!popup) return;
    const body = document.body;
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");
    const screen3 = document.getElementById("screen3");
    const localBtn = document.getElementById("open-local");
    const panBtn = document.getElementById("open-pan");
    const continueBtns = document.querySelectorAll(".continue-shopping-jtpl");
    const STORAGE_KEY = "popup_closed";
    // =========================
    // SHOPIFY SETTINGS
    // =========================
    const popupDelaySeconds = Number(2);
    const popupCooldownDays = Number(1);
    // =========================
    // TIME VALUES
    // =========================
    const INITIAL_DELAY = popupDelaySeconds * 1000;
    const COOLDOWN_TIME =
        popupCooldownDays * 24 * 60 * 60 * 1000;

    // =========================
    // CHECK LAST CLOSED TIME
    // =========================
    const lastClosedTime = localStorage.getItem(STORAGE_KEY);
    const shouldShowPopup =
        !lastClosedTime ||
        (Date.now() - parseInt(lastClosedTime, 10)) >= COOLDOWN_TIME;

    // =========================
    // OPEN POPUP
    // =========================
    function openPopup() {
        // always reset to screen1
        screen1.classList.add("active");
        screen2.classList.remove("active");
        screen3.classList.remove("active");

        popup.style.display = "flex";

        body.classList.add("overflow-hidden");
    }

    // =========================
    // CLOSE POPUP
    // =========================
    function closePopup() {
        popup.style.display = "none";
        body.classList.remove("overflow-hidden");
        // save current close time
        localStorage.setItem(STORAGE_KEY, Date.now().toString());
    }

    // =========================
    // FIRST TIME OPEN
    // =========================
    if (shouldShowPopup) {
        setTimeout(function () {
            openPopup();
        }, INITIAL_DELAY);
    }

    // =========================
    // SCREEN NAVIGATION
    // =========================
    if (localBtn) {
        localBtn.addEventListener("click", function () {
            screen1.classList.remove("active");
            screen2.classList.add("active");
            screen3.classList.remove("active");
        });
    }
    if (panBtn) {
        panBtn.addEventListener("click", function () {
            screen1.classList.remove("active");
            screen2.classList.remove("active");
            screen3.classList.add("active");

        });
    }

    // =========================
    // CLOSE EVENTS
    // =========================
    continueBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            closePopup();
        });
    });
});
