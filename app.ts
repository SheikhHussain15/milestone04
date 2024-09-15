// Selecting the form and resume preview container
const resumeform = document.getElementById('resumeForm') as HTMLFormElement;
const resumepreview = document.getElementById('resumePreview') as HTMLDivElement;

// Handle form submission
resumeform.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const fname = (document.getElementById('fname') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const dob = (document.getElementById('dob') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

  // Create resume HTML
  const resumeHTML = `
    <h3 style="font-size:20px;font-weight:bold;padding:5px;margin-left:10px;">${name}</h3><hr><br>
    <p style="margin-left:15px"><strong>Father name:</strong> ${fname}</p><hr>
    <p style="margin-left:15px"><strong>Email:</strong> ${email}</p><hr>
    <p style="margin-left:15px"><strong>Phone:</strong> ${phone}</p><hr>
    <p style="margin-left:15px"><strong>Date of birth:</strong> ${dob}</p><hr><br><hr>
    <h4 style="font-size:16px;font-weight:bold;padding:5px;margin-left:10px;">Education</h4><br>
    <p style="margin-left:15px">${education}</p><hr><br><hr>
    <h4 style="font-size:16px;font-weight:bold;padding:5px;margin-left:10px;">Skills</h4><br>
    <ul style="margin-left:15px">
      ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
    </ul><hr><br><hr>
    <h4 style="font-size:16px;font-weight:bold;padding:5px;margin-left:10px;">Experience</h4><br>
    <p style="margin-left:15px">${experience}</p>
  `;

  // Display the resume preview
  resumepreview.innerHTML = resumeHTML;

  const workExperience = document.getElementById("workExperience");
  const workSkills = document.getElementById("workSkills");
  const workEducation = document.getElementById("workEducation");

  workExperience?.addEventListener("input",(event)=>{
    const updateExperience = (event.target as HTMLElement).innerText;
    console.log(updateExperience)
  })


  workSkills?.addEventListener("input",(event)=>{
    const workSkills = (event.target as HTMLElement).innerText;
    console.log(workSkills)
  })

  workEducation?.addEventListener("input",(event)=>{
    const workEducation = (event.target as HTMLElement).innerText;
    console.log(workEducation)
  })
});
