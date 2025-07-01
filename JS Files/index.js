import { greetUser } from './helpers.js';
import { APP_NAME } from './config.js';

const unused = 42; // Unused variable

function main() {
  const userName = 'Bob'; // missing semi
  const greeting  = greetUser(userName); // Extra spaces

  console.log(APP_NAME + ' says: ' + greeting); // console.log 
}

main();
