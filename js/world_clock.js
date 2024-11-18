function updateWorldClock() {
    const now = new Date();

    const newYorkTime = now.toLocaleString("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    document.getElementById("new-york-time").textContent = newYorkTime;

    const londonTime = now.toLocaleString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    document.getElementById("london-time").textContent = londonTime;

    const tokyoTime = now.toLocaleString("en-JP", {
        timeZone: "Asia/Tokyo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    document.getElementById("tokyo-time").textContent = tokyoTime;

    const sydneyTime = now.toLocaleString("en-AU", {
        timeZone: "Australia/Sydney",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });
    document.getElementById("sydney-time").textContent = sydneyTime;
}

setInterval(updateWorldClock, 1000);
updateWorldClock();