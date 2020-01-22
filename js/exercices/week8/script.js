let root = document.getElementById("root");
let btn = document.createElement("button");
btn.setAttribute("type","button"); 
btn.setAttribute("id","myBtn"); 
root.appendChild(btn);

document.getElementById("myBtn").addEventListener("click", getData);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function getData() {
	let url = `https://swapi.co/api/people/${getRandomInt(50)}/`
	let data = await (await fetch(url)).json();
	let homeworld_url = Object.values(data)[8];
	let homeworld_data = await (await fetch(homeworld_url)).json();
	console.log(data);
	console.log(homeworld_data);
}