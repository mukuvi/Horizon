async function userData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = response.json();

    console.log(data);
  } catch {
    (error) => console.log(`An error occure ${error}`);
  }
}
