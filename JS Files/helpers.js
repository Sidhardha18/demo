function greetUser(name) {
  if (name == '') { // Use of == instead of ===
    console.log(name); // console.log
    return 'Hi!';
  }

  return `Hi, ${name}!`;
}

export { greetUser } //missing semi
