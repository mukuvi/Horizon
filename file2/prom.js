let a = new Promise((resolve, reject) => {
  let b = 1 + 1;
  if (b === 2) {
  } else {
    reject("you are wrong");
  }
});
