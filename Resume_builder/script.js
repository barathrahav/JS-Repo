function addNewLang() {
  let languageField = document.createElement("input");
  languageField.setAttribute("type", "text");
  languageField.setAttribute("class", "form-control languagefield mt-2");
  languageField.setAttribute("placeholder", "Enter the language you know");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2", "mt-1");
  removeButton.addEventListener("click", function () {
    languageField.remove();
    removeButton.remove();
  });

  let languageContainer = document.querySelector("#languageFieldsContainer");
  languageContainer.appendChild(languageField);
  languageContainer.appendChild(removeButton);
}

function addNewSkill() {
  let newnode = document.createElement("textarea");
  newnode.classList.add("form-control");
  newnode.style.marginTop = "20px";
  newnode.classList.add("tallentfield");
  newnode.setAttribute("rows", 1);
  newnode.setAttribute("placeholder", "Enter your Skill");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2", "mt-1");
  removeButton.addEventListener("click", function () {
    newnode.remove();
    removeButton.remove();
  });

  let weAdd = document.getElementById("sl");
  let weAddButton = document.getElementById("slAddButton");

  weAdd.insertBefore(newnode, weAddButton);
  weAdd.insertBefore(removeButton, weAddButton);
}

function addNewExp() {
  // Create the work experience container
  let newExpContainer = document.createElement("div");
  newExpContainer.classList.add("work-experience");

  // Create the position and company name input fields within a row
  let positionRow = document.createElement("div");
  positionRow.classList.add("row");

  let positionCol = document.createElement("div");
  positionCol.classList.add("col");
  let positionInput = document.createElement("input");
  positionInput.type = "text";
  positionInput.classList.add("form-control", "mt-3");
  positionInput.placeholder = "Position";
  positionInput.name = "positionField";
  positionCol.appendChild(positionInput);

  let companyCol = document.createElement("div");
  companyCol.classList.add("col");
  let companyInput = document.createElement("input");
  companyInput.type = "text";
  companyInput.classList.add("form-control", "mt-3");
  companyInput.placeholder = "Company Name";
  companyInput.name = "companyField";
  companyCol.appendChild(companyInput);

  positionRow.appendChild(positionCol);
  positionRow.appendChild(companyCol);

  // Create the start date and end date input fields within a row
  let dateRow = document.createElement("div");
  dateRow.classList.add("row", "mt-3");

  let startDateCol = document.createElement("div");
  startDateCol.classList.add("col");
  let startDateInput = document.createElement("input");
  startDateInput.type = "date";
  startDateInput.classList.add("form-control");
  startDateInput.placeholder = "Start Date";
  startDateInput.name = "startDateField";
  startDateCol.appendChild(startDateInput);

  let endDateCol = document.createElement("div");
  endDateCol.classList.add("col");
  let endDateInput = document.createElement("input");
  endDateInput.type = "date";
  endDateInput.classList.add("form-control");
  endDateInput.placeholder = "End Date";
  endDateInput.name = "endDateField";
  endDateCol.appendChild(endDateInput);

  dateRow.appendChild(startDateCol);
  dateRow.appendChild(endDateCol);

  // Create the work experience description textarea
  let expTextarea = document.createElement("textarea");
  expTextarea.rows = 3;
  expTextarea.classList.add("form-control", "wefield", "mt-3");
  expTextarea.placeholder = "Enter your Work Experience Description";
  expTextarea.name = "expField";

  // Create the remove button
  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2", "mt-1");
  removeButton.addEventListener("click", function () {
    newExpContainer.remove();
  });

  // Append fields and remove button to the work experience container
  newExpContainer.appendChild(positionRow);
  newExpContainer.appendChild(dateRow);
  newExpContainer.appendChild(expTextarea);
  newExpContainer.appendChild(removeButton);

  // Get the work experience container and insert the new work experience container before the add button
  let weContainer = document.getElementById("we");
  let addButton = document.getElementById("weAddButton");
  weContainer.insertBefore(newExpContainer, addButton);
}




function addNewEdu() {
  let newnode = document.createElement("div");
  newnode.classList.add("education");

  let degreeRow = document.createElement("div");
  degreeRow.classList.add("row");

  let degreeCol = document.createElement("div");
  degreeCol.classList.add("col");
  let degreeInput = document.createElement("input");
  degreeInput.type = "text";
  degreeInput.classList.add("form-control", "mt-3");
  degreeInput.placeholder = "Degree";
  degreeInput.name = "degreeField";
  degreeCol.appendChild(degreeInput);

  let institutionCol = document.createElement("div");
  institutionCol.classList.add("col");
  let institutionInput = document.createElement("input");
  institutionInput.type = "text";
  institutionInput.classList.add("form-control", "mt-3");
  institutionInput.placeholder = "Institution";
  institutionInput.name = "institutionField";
  institutionCol.appendChild(institutionInput);

  degreeRow.appendChild(degreeCol);
  degreeRow.appendChild(institutionCol);

  let completionDateRow = document.createElement("div");
  completionDateRow.classList.add("row", "mt-3");

  let completionDateCol = document.createElement("div");
  completionDateCol.classList.add("col");
  let completionDateInput = document.createElement("input");
  completionDateInput.type = "date";
  completionDateInput.classList.add("form-control");
  completionDateInput.placeholder = "Completion Date";
  completionDateInput.name = "completionDateField";
  completionDateCol.appendChild(completionDateInput);

  completionDateRow.appendChild(completionDateCol);

  let eduDescriptionTextarea = document.createElement("textarea");
  eduDescriptionTextarea.rows = 3;
  eduDescriptionTextarea.classList.add("form-control", "edufield", "mt-3");
  eduDescriptionTextarea.placeholder = "Enter your Education Description";
  eduDescriptionTextarea.name = "eduField";

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2", "mt-1");
  removeButton.addEventListener("click", function () {
    newnode.remove();
    removeButton.remove();
  });

  newnode.appendChild(degreeRow);
  newnode.appendChild(completionDateRow);
  newnode.appendChild(eduDescriptionTextarea);
  newnode.appendChild(removeButton);

  let eduSection = document.getElementById("edu");
  let addButton = document.getElementById("EAddButton");

  eduSection.insertBefore(newnode, addButton);
}





//generating cv

function generateResume() {
  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);

  // Set image
  reader.onloadend = function () {
    document.getElementById("my-img").src = reader.result;
  };

  let firstName = document.getElementById("firstNameField").value;
  let lastName = document.getElementById("lastNameField").value;
  let fullName = firstName + " " + lastName;
  document.getElementById("nameT1").innerHTML = fullName;

  let contactNo = document.getElementById("contactfield").value;
  document.getElementById("noT").innerHTML = contactNo;

  let email = document.getElementById("emailfield").value;
  document.getElementById("emailT").innerHTML = email;

  let address = document.getElementById("addressfield").value;
  document.getElementById("addressT").innerHTML = address;

  let Github = document.getElementById("githubfield").value;
  document.getElementById("githubT").innerHTML = Github;

  let Linkedin = document.getElementById("linkedinfield").value;
  document.getElementById("linkedinT").innerHTML = Linkedin;

  let knw = document.getElementsByClassName("tallentfield");
  let skills = [];
  for (let e of knw) {
    skills.push(e.value);
  }
  document.getElementById("skillT").innerHTML = skills.map(skill => `<li>${skill}</li>`).join("");

  let obj = document.getElementById("objfield").value;
  document.getElementById("objT").innerHTML = obj;

  let work = document.getElementsByClassName("work-experience");
  let experiences = [];
  for (let exp of work) {
    let position = exp.querySelector('input[name="positionField"]').value;
    let company = exp.querySelector('input[name="companyField"]').value;
    let startDate = exp.querySelector('input[name="startDateField"]').value;
    let endDate = exp.querySelector('input[name="endDateField"]').value;
    let description = exp.querySelector('textarea[name="expField"]').value;

    experiences.push({
      position: position,
      company: company,
      startDate: startDate,
      endDate: endDate,
      description: description
    });
  }
  let experiencesHTML = experiences.map(exp => `<li>${exp.position} at ${exp.company}<br>${exp.startDate} - ${exp.endDate}<br>${exp.description}</li>`).join("");
  document.getElementById("weT").innerHTML = experiencesHTML;

  let Education = document.getElementsByClassName("education");
  let educationList = [];
  for (let edu of Education) {
    let degree = edu.querySelector('input[name="degreeField"]').value;
    let institution = edu.querySelector('input[name="institutionField"]').value;
    let completionDate = edu.querySelector('input[name="completionDateField"]').value;
    let eduDescription = edu.querySelector('textarea[name="eduField"]').value;

    educationList.push({
      degree: degree,
      institution: institution,
      completionDate: completionDate,
      eduDescription: eduDescription
    });
  }
  let educationHTML = educationList.map(edu => `<li>${edu.degree} from ${edu.institution}<br>${edu.completionDate}<br>${edu.eduDescription}</li>`).join("");
  document.getElementById("eduT").innerHTML = educationHTML;

  let languagesField = document.querySelectorAll(".languagefield");

  let languagesList = document.getElementById("languagesT");
  languagesList.innerHTML = ""; // Clear previous list items

  // Loop through the languages input fields
  languagesField.forEach(function (field) {
    if (field.value.trim() !== "") {
      let language = document.createElement("li");
      language.innerText = field.value;
      languagesList.appendChild(language);
    }
  });

  

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";

  storeInput();
}


// Storing the input in local storage
function storeInput() {
  let formData = {
    firstName: document.getElementById("firstNameField").value,
    lastName: document.getElementById("lastNameField").value,
    contactNo: document.getElementById("contactfield").value,
    email: document.getElementById("emailfield").value,
    address: document.getElementById("addressfield").value,
    github: document.getElementById("githubfield").value,
    linkedin: document.getElementById("linkedinfield").value,
    skills: getValuesByClassName("tallentfield"),
    objective: document.getElementById("objfield").value,
    workExperience: getValuesByClassName("wefield"),
    education: getValuesByClassName("edufield")
  };

  localStorage.setItem("formData", JSON.stringify(formData));
}

// Helper function to get values by class name
function getValuesByClassName(className) {
  let elements = document.getElementsByClassName(className);
  let values = [];
  for (let i = 0; i < elements.length; i++) {
    values.push(elements[i].value);
  }
  return values;
}

// Fetching the stored data from local storage and displaying it on another page
function displayData() {
  let storedData = localStorage.getItem("formData");
  if (storedData) {
    let formData = JSON.parse(storedData);

    // Retrieve the data and populate the fields on the page
    document.getElementById("firstNameField").value = formData.firstName;
    document.getElementById("lastNameField").value = formData.lastName;
    document.getElementById("contactfield").value = formData.contactNo;
    document.getElementById("emailfield").value = formData.email;
    document.getElementById("addressfield").value = formData.address;
    document.getElementById("githubfield").value = formData.github;
    document.getElementById("linkedinfield").value = formData.linkedin;

    let skillsContainer = document.getElementById("sl");
    skillsContainer.innerHTML = ""; // Clear any existing skills

    for (let skill of formData.skills) {
      let newnode = document.createElement("textarea");
      newnode.classList.add("form-control", "tallentfield");
      newnode.style.marginTop = "20px";
      newnode.setAttribute("rows", 1);
      newnode.setAttribute("placeholder", "Enter your Skill");
      newnode.value = skill;

      let removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
      removeButton.addEventListener("click", function () {
        newnode.remove();
        removeButton.remove();
      });

      skillsContainer.insertBefore(newnode, skillsContainer.lastElementChild);
      skillsContainer.insertBefore(removeButton, skillsContainer.lastElementChild);
    }

    document.getElementById("objfield").value = formData.objective;

    let weContainer = document.getElementById("we");
    weContainer.innerHTML = ""; // Clear any existing work experience

    for (let exp of formData.workExperience) {
      let newnode = document.createElement("textarea");
      newnode.classList.add("form-control", "wefield");
      newnode.style.marginTop = "20px";
      newnode.setAttribute("rows", 3);
      newnode.setAttribute("placeholder", "Enter your Work Experience");
      newnode.value = exp;

      let removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
      removeButton.addEventListener("click", function () {
        newnode.remove();
        removeButton.remove();
      });

      weContainer.insertBefore(newnode, weContainer.lastElementChild);
      weContainer.insertBefore(removeButton, weContainer.lastElementChild);
    }

    let eduContainer = document.getElementById("edu");
    eduContainer.innerHTML = ""; // Clear any existing education

    for (let edu of formData.education) {
      let newnode = document.createElement("textarea");
      newnode.classList.add("form-control", "edufield");
      newnode.style.marginTop = "20px";
      newnode.setAttribute("rows", 3);
      newnode.setAttribute("placeholder", "Enter your Education");
      newnode.value = edu;

      let removeButton = document.createElement("button");
      removeButton.innerText = "Remove";
      removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
      removeButton.addEventListener("click", function () {
        newnode.remove();
        removeButton.remove();
      });

      eduContainer.insertBefore(newnode, eduContainer.lastElementChild);
      eduContainer.insertBefore(removeButton, eduContainer.lastElementChild);
    }
  } else {
    console.log("No stored data found");
  }
}


//printing the resume

function printResume() {
  console.log("clicked");
  document.getElementById("cv-print").style.display = "none";
  displayData();
  window.print();
}
