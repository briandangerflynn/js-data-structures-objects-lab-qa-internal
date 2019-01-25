// Write your solution in this file!
const driver = {name:"dave"};

const updateDriverWithKeyAndValue = function(duck, cat, dog){
  const newDriver = Object.assign({}, duck})
  driver[cat] = value
  return newDriver;
};

updateDriverWithKeyAndValue(driver, address, "1 broadway pl.")

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
