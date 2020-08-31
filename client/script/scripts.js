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
      $('#inputs input').removeClass("error");
      document.getElementById("submitEmployeeBtn").disabled = false;
    } //end else
  }); //end errors
} //end onReady



//pre existing variables
let employees = [];

//all to be called functions down here

function addEmployee(){
    console.log( 'in addEmployee' );
    const newEmployee = {
        First: $( '#firstNameInput' ).val(),
        Last: $( '#lastNameInput' ).val(),
        Id: $( '#idNumberInput' ).val(),
        Title: $('#jobTitleInput').val(),
        Salary: $('#annualSalaryInput').val() 
    } // end newEmployee
    employees.push( newEmployee );
    displayEmployees();
} // end addEmployee

// a remove button that will remove an employee from the table on click
function deleteEmployee(){
    $('#employeeTable').on( 'click', '.employeeDeleteBtn', function(){
      $( this ).closest( '.employeeObject' ).remove();
    }); // end on click
  } // end removeEmployee

function displayEmployees(){
    console.log( 'in displayEmployees' );
    // target a table element on DOM
    let el = $( '#employeeTable' );
    el.empty();
    // loop through employees
    el.append(`<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>ID Number</th>
        <th>Job Title</th>
        <th>Annual Salary</th>
        <th></th>
    </tr>`);
    for( let i=0; i<employees.length; i++ ){
        // append each employee to the table 
        el.append( `<tr class="employeeObject">
        <td>${ employees[i].First }</td> 
        <td> ${ employees[i].Last }</td>
        <td>${ employees[i].Id }</td> 
        <td> ${ employees[i].Title }</td> 
        <td>${ employees[i].Salary}</td>
        <td><button class="employeeDeleteBtn">Delete</button></td>
        </tr>` );
    } // end for
    $( '#firstNameInput' ).val('');
    $( '#lastNameInput' ).val('');
    $( '#idNumberInput' ).val('');
    $('#jobTitleInput').val('');
    $('#annualSalaryInput').val(''); 
    $('.employeeDeleteBtn').on('click', deleteEmployee);
    calculateMonthlyCost()
} // end displayEmployees

function calculateMonthlyCost(){
    let yearlyCost = 0;
    for (let i = 0; i < employees.length; i++){
        yearlyCost += Number(employees[ i ].Salary); 
    }//end for
      let el = $('#monthlyCostOut');
      el.empty();
      el.append( yearlyCost/12 );
      if ((yearlyCost/12) > 20000) {
          $('#monthlyCost').css('background', 'red');
      }
      else
      return false
    }//end of calculateMonthlyCost