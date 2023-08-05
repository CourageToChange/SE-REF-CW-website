function goBack() {
    window.location.href = "/Users/nobin/Desktop/SE REF CW website/exam_details/exam_details.html";
}

function goBackAnimation() {
    const goBackButton = document.querySelector(".go-back-button");
    goBackButton.classList.add("going-back");
    setTimeout(goBack, 1000);
    window.location.href = "/Users/nobin/Desktop/SE REF CW website/exam_details/exam_details.html";
}

function submitForm() {
    var issueID = document.getElementById("issueID");
    var incident = document.getElementById("incident");

    if (issueID.value.trim() === "" || incident.value.trim() === "") {
        alert("Please fill in all fields.");
    } else {
        // Here you can submit the form or do whatever you need to do after validation
        // For the animation, you can add code here or in CSS
    }
}
