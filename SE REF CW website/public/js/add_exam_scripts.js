document.getElementById('addExamForm').onsubmit = async (e) => {
    e.preventDefault();
    
    let moduleName = document.getElementById('moduleName').value;
    let examName = document.getElementById('examName').value;
    let examDate = document.getElementById('examDate').value;
    let timeZone = document.getElementById('timeZone').value;
    let startTime = document.getElementById('startTime').value;
    let endTime = document.getElementById('endTime').value;
    let examRules = document.getElementById('examRules').value;

    // Show the loader with fade-in
    let loader = document.getElementById('loader');
    loader.classList.add('show');

    try {
        let response = await fetch('http://localhost:3001/exam', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                moduleName: moduleName,
                examName: examName,
                examDate: examDate,
                timeZone: timeZone,
                startTime: startTime,
                endTime: endTime,
                examRules: examRules
            }),
        });

        if (response.ok) { 
            alert("Exam data saved successfully.");
            window.location.href = "/";
        } else {
            alert("Error: " + response.status);
        }
    } catch (err) {
        alert("Error: " + err);
    } finally {
        // Hide the loader with fade-out
        loader.classList.remove('show');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); // Matches the duration of the opacity transition
    }
};
