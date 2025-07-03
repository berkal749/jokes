var button = document.getElementById("b");
button.addEventListener("click", getData);
async function getData() {
  const url = "https://icanhazdadjoke.com/";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    const joke = json.joke;
    var oke = document.getElementById("joke");
    oke.innerText = joke;
  } catch (error) {
    return error;
  }
}

