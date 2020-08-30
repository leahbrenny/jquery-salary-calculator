$(document).ready(onReady);

function onReady() {
  console.log("Ready to go");
  //put all initial load functions in here

  $("#submitEmployeeBtn").on("click", changeInputs);
  $("#inputs input").blur(function () {
    if (!$(this).val()) {
      $(this).addClass("error");
      document.getElementById("submitEmployeeBtn").disabled = true;
    } //end if
    else {
      $(this).removeClass("error");
      document.getElementById("submitEmployeeBtn").disabled = false;
    } //end else
  }); //end errors
} //end onReady

//pre existing variables
let employees = [];
let yearlyCost = 0;

//all to be called functions down here
function changeInputs() {
  firstName = $("#firstNameInput").val();
  lastName = $("#lastNameInput").val();
  idNumber = $("#idNumberInput").val();
  jobTitle = $("#jobTitleInput").val();
  annualSalary = $("#annualSalaryInput").val();
  if (firstName && lastName && idNumber && jobTitle && annualSalary) {
    newEmployee(firstName, lastName, idNumber, jobTitle, annualSalary);
    displayEmployee();
    $("#firstNameInput").val("");
    $("#lastNameInput").val("");
    $("#idNumberInput").val("");
    $("#jobTitleInput").val("");
    $("#annualSalaryInput").val("");
  } //end if
  else {
    console.log("You are missing an input!");
    return false;
  } //end else
} //end changeInputs

function newEmployee(firstName, lastName, idNumber, jobTitle, annualSalary) {
  console.log(
    "in newEmployee:",
    firstName,
    lastName,
    idNumber,
    jobTitle,
    annualSalary
  );
  const newEmployeeObject = {
    "First name": firstName,
    "Last name": lastName,
    "Id Number": idNumber,
    "Job Title": jobTitle,
    "Annual Salary": annualSalary,
  }; // end newCarObject
  employees.push(newEmployeeObject);
  return true;
} // end newEmployee

function displayEmployee() {
  console.log("in displayEmployee");
}
