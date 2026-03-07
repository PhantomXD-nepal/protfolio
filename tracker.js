(function () {
    console.log("Analytics Tracker Initialized");

    // Basic Configuration
    const analyticsUrl = "https://goanalyze-production.up.railway.app/api/visit"; // Change this in production

    // Generate a UUIDv4-like session ID
    function uuidv4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0,
                v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    // Get or create a session ID
    let sessionId = sessionStorage.getItem("visit_session_id");
    if (!sessionId) {
        sessionId = uuidv4();
        sessionStorage.setItem("visit_session_id", sessionId);
    }

    // Capture Visit Start
    function sendVisitStart() {
        const urlParams = new URLSearchParams(window.location.search);
        const source = (
            urlParams.get("source") ||
            urlParams.get("utm_source") ||
            urlParams.get("ref") ||
            ""
        ).trim();

        const data = {
            session_id: sessionId,
            referrer: document.referrer || "Direct",
            url_source: source,
            user_agent: navigator.userAgent,
        };

        fetch(`${analyticsUrl}/start`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            keepalive: true,
        })
            .then(() => console.log("Visit start tracked"))
            .catch((err) => console.error("Analytics Error (start):", err));
    }

    // Capture Visit End — guarded to fire only once
    let visitEndSent = false;
    function sendVisitEnd() {
        if (visitEndSent) return;
        visitEndSent = true;

        const data = JSON.stringify({ session_id: sessionId });

        // sendBeacon is preferred on page unload for reliability
        if (navigator.sendBeacon) {
            navigator.sendBeacon(
                `${analyticsUrl}/end`,
                new Blob([data], { type: "application/json" })
            );
        } else {
            fetch(`${analyticsUrl}/end`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: data,
                keepalive: true,
            }).catch((err) => console.error("Analytics Error (end):", err));
        }
    }

    // Track when the tab is hidden or the page is being unloaded.
    // Using visibilitychange + pagehide covers desktop and mobile browsers
    // more reliably than beforeunload + unload (which could both fire and
    // cause duplicate sends, and don't fire consistently on mobile).
    document.addEventListener("visibilitychange", function () {
        if (document.visibilityState === "hidden") {
            sendVisitEnd();
        }
    });

    window.addEventListener("pagehide", sendVisitEnd);

    // Kick things off
    sendVisitStart();
})();
