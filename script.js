document.getElementById('resume-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const photo = document.getElementById('photo').files[0];
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const degree = document.getElementById('degree').value;
    const school = document.getElementById('school').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;

    // Show profile photo if uploaded
    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('resume-photo').src = e.target.result;
        };
        reader.readAsDataURL(photo);
    }

    // Display the resume output
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-email').textContent = email;
    document.getElementById('output-phone').textContent = phone;
    document.getElementById('output-degree').textContent = degree;
    document.getElementById('output-school').textContent = school;
    document.getElementById('output-experience').textContent = experience;
    document.getElementById('output-skills').textContent = skills;

    // Show the generated resume
    document.getElementById('resume-output').style.display = 'block';
});