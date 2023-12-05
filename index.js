// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
};

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
};

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Robert"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key] = value;
    return obj;
}
const newerEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name', 'Bryon');

function deleteFromEmployeeByKey(obj,key,value){
    const newObj = { ...employee };
    newObj[key] = value;
    return newObj;
}
const delEmployee = deleteFromEmployeeByKey()

function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    delete obj[key]
    return obj;
}
