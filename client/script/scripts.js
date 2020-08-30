$(document).ready(onReady);

function onReady() {
  console.log("Ready to go");
  //put all initial load functions in here

  $("#submitEmployeeBtn").on("click", addEmployee);
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

function addEmployee(){
    console.log( 'in addEmployee' );
    const newEmployee = {
        First: $( '#firstNameInput' ).val(),
        Last: $( '#lastNameInput' ).val(),
        Id: $( '#idNumberInput' ).val(),
        Title: $('#jobTitleInput').val(),
        Salary: $('annualSalaryInput').val() 
    } // end newEmployee
    employees.push( newEmployee );
    displayEmployees();
} // end addEmployee

function displayEmployees(){
    console.log( 'in displayEmployees' );
    // target a table element on DOM
    let el = $( '#employeeTable' );
    // empty el
    el.empty();
    // loop through employees
    for( let i=0; i<employees.length; i++ ){
        // append each employee to the table 
        el.append( `<tr><td>${ employees[i].First } </td> <td> ${ employees[i].Last } </td>
            <td>${ employees[i].Id } </td> <td> ${ employees[i].Title } </td> 
            <td>${ employees[i].Salary} </td></tr>` );
    } // end for
} // end displayEmployees
