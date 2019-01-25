// Write your solution in this file!
const driver = {foo:"bar"};

const updateDriverWithKeyAndValue = function(driver, key, value){
  const newDriver = Object.assign({}, driver}
  driver[key] = value
  return newDriver;
};

// function nondestructivelyUpdateObject(obj, key, value) {
//   const newObj = { ...obj };
 
//   newObj[key] = value;
 
//   return newObj;
// }





const destructivelyUpdateDriverWithKeyAndValue = function(driver,key,value){
  driver[key] = value;
  return driver;
};

const deleteFromDriverByKey = function(driver, key){
  const newDriver = Object.assign({},driver);
  delete newDriver[key];
  return newDriver;
}

const destructivelyDeleteFromDriverByKey = function(driver, key){
  delete driver[key]
  return driver
}
