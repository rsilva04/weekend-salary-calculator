console.log("hi");

let monthlyCosts = 0;
let forms = [];
let maxMonthlyCost = 20000;

function completedForms(event) {
    event.preventDefault();

    forms.push({
        firstName: firstName.value,
        lastName: lastName.value,
        idNumber: idNumber.value,
        jobTitle: jobTitle.value,
        annualSalary: annualSalary.value
    });

    console.log(forms);

    let employeeInformation = document.getElementById('employees-information');
    let row = employeeInformation.insertRow(forms.length);


    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    let deleteButton = document.createElement("button");
    deleteButton.onclick = function () { deleteRow(row); };
    deleteButton.textContent = 'delete';

    cell1.innerHTML = firstName.value;
    cell2.innerHTML = lastName.value;
    cell3.innerHTML = idNumber.value;
    cell4.innerHTML = jobTitle.value;
    cell5.innerHTML = annualSalary.value;
    cell6.appendChild(deleteButton);

    monthlyCosts += parseInt(annualSalary.value);
    console.log(monthlyCosts);
    if (monthlyCosts > maxMonthlyCost){
        document.body.style.backgroundColor = "red";
    } 
    
  
}

function deleteRow(row) {
    row.remove();

}
