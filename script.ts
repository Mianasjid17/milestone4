document.getElementById('ResumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Type assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experinceElement = document.getElementById('experince') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const profileImageElement = document.getElementById('profileImage') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experinceElement && skillsElement && profileImageElement) {
        // Retrieve values
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experince = experinceElement.value;
        const skills = skillsElement.value;
        
        // Retrieve image file and create a URL for it
        let imageUrl = '';
        if (profileImageElement.files && profileImageElement.files[0]) {
            const file = profileImageElement.files[0];
            imageUrl = URL.createObjectURL(file);
        }

        // Create resume output with contenteditable attributes and image
        const resumeOutput = `
        <h2>Resume</h2>
        <img src="${imageUrl}" alt="Profile Picture" style="max-width: 150px; height: auto;"/><br>
        <p><strong>Name:</strong> <span id="editableName" contenteditable="true">${name}</span></p>
        <p><strong>Email:</strong> <span id="editableEmail" contenteditable="true">${email}</span></p>
        <p><strong>Phone Number:</strong> <span id="editablePhone" contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p id="editableEducation" contenteditable="true">${education}</p>
        <h3>Experience</h3>
        <p id="editableExperience" contenteditable="true">${experince}</p>
        <h3>Skills</h3>
        <p id="editableSkills" contenteditable="true">${skills}</p>
        `;

        const resumeOutputElement = document.getElementById('ResumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            // Add event listeners for editable content
            addEditingListeners();
        } else {
            console.error('The resume output element is missing');
        }
    } else {
        console.error('One or more input elements are missing');
    }
});

// Function to add event listeners for contenteditable elements
function addEditingListeners() {
    const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach(element => {
        element.addEventListener('blur', function() {
            // Handle changes or save them
            console.log(`Updated content in ${element.id}: ${element.innerHTML}`);
        });
    });
}
