function goBack() {
    window.location.href = "../index.html";
}

function logIssue() {
    window.location.href = "../log_issue/log_issue.html";
}

// Live clock
function liveClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById
