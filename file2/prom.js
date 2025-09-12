let a = new Promise((resolve, reject) => {
  let b = 6 + 1;
  if (b === 2) {
    resolve("success");
  } else {
    reject("Failed");
  }
})
  .then(() => console.log("hello"))
  .catch((error) => console.log(error));
