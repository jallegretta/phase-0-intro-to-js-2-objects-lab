const employee = {
    name: 'Jasper Cunningham',
    streetAddress: '1212 mockingbird lane'
}

  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = {...employee};
    employee2.name = `Sam`;
    employee2.streetAddress = `11 Broadway`;
    return employee2;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = `12 Broadway`;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const {name, ...employee2} = employee;
  return employee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}