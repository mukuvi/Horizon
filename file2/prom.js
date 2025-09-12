let a = new Promise((resolve, reject) => {
  let b = 1 + 1;
  if (b === 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
})
  .then(() => console.log("hello"))
  .then((error) => console.log(error));
