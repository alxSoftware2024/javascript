//JSON.stringify(obj): Converts a JavaScript object to a JSON string
const user={name:"ashenafi",age:23};
const jsonuser=JSON.stringify(user);
console.log(jsonuser);
//JSON.parse(jsonString): Parses a JSON string and returns a JavaScript object.
const jsobject=JSON.parse(jsonuser);
console.log(jsobject);