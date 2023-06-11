function addNewSkill() {
  let newnode = document.createElement("textarea");
  newnode.classList.add("form-control");
  newnode.style.marginTop = "20px";
  newnode.classList.add("tallentfield");
  newnode.setAttribute("rows", 1);
  newnode.setAttribute("placeholder", "Enter your Skill");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
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
  let newnode = document.createElement("textarea");
  newnode.classList.add("form-control");
  newnode.style.marginTop = "20px";
  newnode.classList.add("wefield");
  newnode.setAttribute("rows", 3);
  newnode.setAttribute("placeholder", "Enter your Work Experience");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
  removeButton.addEventListener("click", function () {
    newnode.remove();
    removeButton.remove();
  });

  let weAdd = document.getElementById("we");
  let weAddButton = document.getElementById("weAddButton");

  weAdd.insertBefore(newnode, weAddButton);
  weAdd.insertBefore(removeButton, weAddButton);
}

function addNewEdu() {
  let newnode = document.createElement("textarea");
  newnode.classList.add("form-control");
  newnode.style.marginTop = "20px";
  newnode.classList.add("edufield");
  newnode.setAttribute("rows", 3);
  newnode.setAttribute("placeholder", "Enter your Education");

  let removeButton = document.createElement("button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");
  removeButton.addEventListener("click", function () {
    newnode.remove();
    removeButton.remove();
  });

  let weAdd = document.getElementById("edu");
  let weAddButton = document.getElementById("EAddButton");

  weAdd.insertBefore(newnode, weAddButton);
  weAdd.insertBefore(removeButton, weAddButton);
}

//generating cv

function generateResume() {
  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();

  reader.readAsDataURL(file);

  //set image

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
  let str0 = "";
  for (let e of knw) {
    str0 = str0 + `<li> ${e.value}</li>`;
  }
  document.getElementById("skillT").innerHTML = str0;

  let obj = document.getElementById("objfield").value;
  document.getElementById("objT").innerHTML = obj;

  // experience
  let work = document.getElementsByClassName("wefield");

  let str1 = "";
  for (let e of work) {
    str1 = str1 + `<li> ${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str1;

  //education
  let Education = document.getElementsByClassName("edufield");

  let str2 = "";
  for (let e of Education) {
    str2 = str2 + `<li> ${e.value}</li>`;
    console.log(str2);
  }
  document.getElementById("eduT").innerHTML = str2;

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
  // document.getElementById("cv-print").style.display = "none";
  displayData();
  window.print();
}
