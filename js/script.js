async function getData() {
    const res = await fetch("http://localhost:3000/json");
    const data = await res.json();
    console.log(data);
    document.querySelector(".container").innerText = data;
}

async function postData() {
    const res = await fetch("http://localhost:3000", {
        method: "POST",
    });
    const data = await res.text();
    console.log(data);
}

async function putData() {
    const res = await fetch("http://localhost:3000", {
        method: "PUT",
    });
    const data = await res.text();
    console.log(data);
}

putData();
postData();
getData();

console.log("found!");