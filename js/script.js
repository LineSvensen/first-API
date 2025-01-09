async function getData() {
    const res = await fetch("http://localhost:3000/json");
    const data = await res.json();
    console.log(data);
    document.querySelector(".container").innerText = data;
}

async function postData() {
    const res = await fetch("http://localhost:3000", {
        method: "POST",
        headers:{
            "Content-type": "application/json",
        },
        body: JSON.stringify({test: "hei"}),
    });
    const data = await res.json();
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