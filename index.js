// Write your solution in this file!
const driver = {foo:"bar"};

const updateDriverWithKeyAndValue = function(driver, key, value){
  const newDriver = Object.assign({}, driver, {[key]:value});
  return newDriver;
};

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
