// Write your solution in this file!

var employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let newObj = {...employee };
    newObj[key] = value;

    return newObj;
  }

  
  




  

// Objects updateObjectWithKeyAndValue(object, key, value) does not modify the original object, but rather returns a clone with the new data





function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}



function deleteFromEmployeeByKey(employee, key) {
  var newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}












function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}


