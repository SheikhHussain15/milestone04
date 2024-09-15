// Selecting the form and resume preview container
var resumeform = document.getElementById('resumeForm');
var resumepreview = document.getElementById('resumePreview');
// Handle form submission
resumeform.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var fname = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value;
    // Create resume HTML
    var resumeHTML = "\n    <h3 style=\"font-size:20px;font-weight:bold;padding:5px;margin-left:10px;\">".concat(name, "</h3><hr><br>\n    <p style=\"margin-left:15px\"><strong>Father name:</strong> ").concat(fname, "</p><hr>\n    <p style=\"margin-left:15px\"><strong>Email:</strong> ").concat(email, "</p><hr>\n    <p style=\"margin-left:15px\"><strong>Phone:</strong> ").concat(phone, "</p><hr>\n    <p style=\"margin-left:15px\"><strong>Date of birth:</strong> ").concat(dob, "</p><hr><br><hr>\n    <h4 style=\"font-size:16px;font-weight:bold;padding:5px;margin-left:10px;\">Education</h4><br>\n    <p style=\"margin-left:15px\">").concat(education, "</p><hr><br><hr>\n    <h4 style=\"font-size:16px;font-weight:bold;padding:5px;margin-left:10px;\">Skills</h4><br>\n    <ul style=\"margin-left:15px\">\n      ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n    </ul><hr><br><hr>\n    <h4 style=\"font-size:16px;font-weight:bold;padding:5px;margin-left:10px;\">Experience</h4><br>\n    <p style=\"margin-left:15px\">").concat(experience, "</p>\n  ");
    // Display the resume preview
    resumepreview.innerHTML = resumeHTML;
    var workExperience = document.getElementById("workExperience");
    var workSkills = document.getElementById("workSkills");
    var workEducation = document.getElementById("workEducation");
    workExperience === null || workExperience === void 0 ? void 0 : workExperience.addEventListener("input", function (event) {
        var updateExperience = event.target.innerText;
        console.log(updateExperience);
    });
    workSkills === null || workSkills === void 0 ? void 0 : workSkills.addEventListener("input", function (event) {
        var workSkills = event.target.innerText;
        console.log(workSkills);
    });
    workEducation === null || workEducation === void 0 ? void 0 : workEducation.addEventListener("input", function (event) {
        var workEducation = event.target.innerText;
        console.log(workEducation);
    });
});
