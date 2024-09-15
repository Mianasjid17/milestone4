var _a;
(_a = document.getElementById('ResumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Type assertion
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experinceElement = document.getElementById('experince');
    var skillsElement = document.getElementById('skills');
    var profileImageElement = document.getElementById('profileImage');
    if (nameElement && emailElement && phoneElement && educationElement && experinceElement && skillsElement && profileImageElement) {
        // Retrieve values
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experince = experinceElement.value;
        var skills = skillsElement.value;
        // Retrieve image file and create a URL for it
        var imageUrl = '';
        if (profileImageElement.files && profileImageElement.files[0]) {
            var file = profileImageElement.files[0];
            imageUrl = URL.createObjectURL(file);
        }
        // Create resume output with contenteditable attributes and image
        var resumeOutput = "\n        <h2>Resume</h2>\n        <img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" style=\"max-width: 150px; height: auto;\"/><br>\n        <p><strong>Name:</strong> <span id=\"editableName\" contenteditable=\"true\">").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span id=\"editableEmail\" contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone Number:</strong> <span id=\"editablePhone\" contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p id=\"editableEducation\" contenteditable=\"true\">").concat(education, "</p>\n        <h3>Experience</h3>\n        <p id=\"editableExperience\" contenteditable=\"true\">").concat(experince, "</p>\n        <h3>Skills</h3>\n        <p id=\"editableSkills\" contenteditable=\"true\">").concat(skills, "</p>\n        ");
        var resumeOutputElement = document.getElementById('ResumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Add event listeners for editable content
            addEditingListeners();
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
// Function to add event listeners for contenteditable elements
function addEditingListeners() {
    var editableElements = document.querySelectorAll('[contenteditable]');
    editableElements.forEach(function (element) {
        element.addEventListener('blur', function () {
            // Handle changes or save them
            console.log("Updated content in ".concat(element.id, ": ").concat(element.innerHTML));
        });
    });
}
