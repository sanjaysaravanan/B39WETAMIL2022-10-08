console.log(window);

// Direct call
// alert('Hi There B39WETAMIL');


// using window
// window.alert('Hi There B39WETAMIL');

// prompt --> asking for something 
// var age = Number(prompt('Enter You age...')); // returns the input from user as string

// Task ---> get age and display/alert Child (1-10), Teenager(11-19), Adult(20 - 55), Old (55 - 100)

// if (age < 10) {
//   alert('Your a child');
// } else if () {

// } else if () {

// } else {

// }
// switch case combine multiple execution depending on the case match
// switch (true) {
//   case (age > 0 && age <= 10):
//     alert('Your a child');
//     break;
//   case (age > 10 && age <= 19):
//     alert('Your a teen');
//     break;
//   case (age > 19 && age <= 55):
//     alert('Your an adult');
//     break;
//   case (age > 55 && age <= 100):
//     alert('Your an old person');
//     break;

//   default:
//     alert('Please Enter some valid value...');
// }


// var boolval = confirm('Are You above 18 Years old?'); // true or false
// console.log(boolval);

// var x = 100, y = 200;

// console.log("Line 48", x + y);

// x = 300;
// y = 400;

// console.log("Line 50", x + y);


// x = 500;
// y = 600;

// console.log("Line 52", x + y);


// setting a value in localstorage
// localStorage.setItem('name', 'Sanjay Saravanan');
// localStorage.setItem('batch', 'B39WETAMIL');

// localStorage.setItem('isAuthenticated_local', false);
// console.log('Local Storage value', localStorage.getItem('isAuthenticated_local')); // returns the value if any else null
// localStorage.removeItem('isAuthenticated');


// session
// sessionStorage.setItem('isAuthenticated_session', false);
// console.log('Session storage value', sessionStorage.getItem('isAuthenticated_session')); // returns the value if any else null
// sessionStorage.removeItem('isAuthenticated');


// setTimeout ----> asynchronous process
setTimeout(() => {
  console.log('I am the lines who is getting after some seconds, Line 2');
}, 1000); // milliseconds 

console.log('Line 3');
console.log('Line 4')
// for (var i = 3; i < 10000; i++) {
//   console.log('Line', i);
// }

const login = () => {
  console.log('Logged in user');
  localStorage.setItem('logged_in', true);

  setTimeout(() => {
    console.log('Logging out');
    localStorage.setItem('logged_in', false);
    // logout();
  }, 15000); // milliseconds 
}

// execute a set of statements periodically for a specified interval
const intId = setInterval(() => {
  console.log('Ringing the bell')
}, 3000);

setTimeout(() => {
  console.log('Stopping the Bell');
  clearInterval(intId);
}, 15000);

